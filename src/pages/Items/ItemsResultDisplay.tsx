// See if you can use combined state (to drive render) and URLSearchParams (to preserve navigation) for filters, to see if you can speed up the render like with pagination
// Underlying bulk preloaded item data isn't changing, just the cascading result of sanitization, filtration, and sorting
// Can I somehow have the filters set state here in the results before setting the param, to drive rendering faster? Context? State in Items parent, pass the set function down? Or how?

import './ItemsResultDisplay.scss'
import { useEffect, useState, useMemo } from 'react'
import { useSearchParams, Link, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem } from '../../types'
import ItemResultsPerPage from './ItemResultsPerPage'
import ItemResultsMobileFilterModal from './ItemResultsMobileFilterModal'
import { useMediaQuery } from 'react-responsive'
import PaginatedItems from './PaginatedItems'


const categoryExclusions = [15, 16, 17, 24, 25, 26, 32, 36, 37, 50, 53] //34 engrams //44 emotes //55 masks
const excludedNames = ["###Destiny.CLASSIFIED_v260_NAME###", "Reforge Weapon", "Bank TEST"]
const lightStat = "2391494160"
const attackStat= "368428387"
const defenseStat = "3897883278"
const intellectStat = "144602215"


export default function ItemsResultDisplay(){
    const dataManifest = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const isAboveTablet = useMediaQuery({ query: '(min-width: 769px)'})

    const cleanParamsKey:string = useMemo(() => {
        const cleanParams = new URLSearchParams(searchParams)
        cleanParams.delete('page')
        cleanParams.delete('display')
        return cleanParams.toString()
    }, [searchParams])
    
    const itemArray:DestinyInventoryItem[] = useMemo(()=> {
        return Object.values(dataManifest)
    },[dataManifest])

    const itemsPerPage:number = useMemo(():number =>{
        return parseInt(searchParams.get('display') ?? '30')
    },[searchParams])

    const sanitizedItemsData:DestinyInventoryItem[] = useMemo(():DestinyInventoryItem[] => {
        const searchCategories:number[] = searchParams.getAll("category").map((entry:string):number => parseInt(entry))
        const searchSlots:number[] = searchParams.getAll('slot').map((entry:string):number => parseInt(entry))
        const searchClasses:number[] = searchParams.getAll('class').map((entry:string):number => parseInt(entry))
        const searchTypes:number[] = searchParams.getAll('type').map((entry:string):number => parseInt(entry))
        const searchRarity:number[] = searchParams.getAll('rarity').map((entry:string):number => parseInt(entry))
        const searchSource:number[] = searchParams.getAll('asrc').map((entry:string):number => parseInt(entry))
        const searchVendor:number[] = searchParams.getAll('vsrc').map((entry:string):number => parseInt(entry))
        const searchKeyword:string[] = searchParams.getAll('keyword').map((entry:string):string => entry)
        
        return (
            itemArray.filter((item: DestinyInventoryItem) => {
                const itemHashes:number[] = (item.itemCategoryHashes && item.itemCategoryHashes.length > 0 ? item.itemCategoryHashes ?? [] : []).map(Number)
                // const itemHashes:number[] = (item.itemCategoryHashes && item.itemCategoryHashes.length > 0 ? item.itemCategoryHashes ?? [] : [0]).map(Number)
                const itemSources:number[] = (item.sourceHashes ?? []).map(Number)
                const nameOfItem:string = item.itemName ?? ""
                const matchesCategory:boolean = searchCategories.length === 0 || searchCategories.every((category:number):boolean => itemHashes.includes(category))
                const matchesSlot:boolean = searchSlots.length === 0 || searchSlots.some((category:number):boolean => itemHashes.includes(category))
                const matchesClass:boolean = searchClasses.length == 0 || searchClasses.some((category:number):boolean => itemHashes.includes(category)) || item.classType == 3 
                const matchesType:boolean =  searchTypes.length == 0 || searchTypes.some((category:number):boolean => itemHashes.includes(category)) 
                const matchesRarity:boolean = searchRarity.length == 0 || searchRarity.some((tier:number):boolean => item.tierType === tier)
                const matchesSource:boolean = searchSource.length == 0 || searchSource.some((source:number):boolean => itemSources.includes(source))
                const matchesVendor:boolean = searchVendor.length == 0 || searchVendor.some((source:number):boolean => itemSources.includes(source)) || searchVendor.some((source:number):boolean => itemSources.length == source)
                const matchesKeyword:boolean = searchKeyword.length == 0 || searchKeyword.some((keyword:string):boolean => nameOfItem.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "").includes(keyword.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "")))

                return Boolean( 
                    item.icon
                    && item.itemName
                    && !excludedNames.some((name:string):boolean => item.itemName == name)
                    && itemHashes.length > 0
                    && !categoryExclusions.some((category:number):boolean => itemHashes.includes(category))
                    && matchesCategory && matchesSlot && matchesClass && matchesType && matchesRarity && matchesSource && matchesVendor && matchesKeyword
                    && ((item.stats && item.stats[defenseStat] && item.stats[defenseStat].maximum <= 400 && item.stats[defenseStat].minimum >= 200)
                    || (item.stats && item.stats[attackStat] && item.stats[attackStat].maximum <= 400 && item.stats[attackStat].minimum >= 200))
                    && ((item.stats && item.stats[lightStat] && item.stats[lightStat].value > 20))
                    //&& (item.stats && Object.keys(item.stats).length == 0) //filters for only items with no stats at all aka old class items
                    //&& (item.sourceHashes && item.sourceHashes.length > 1)
                    //&& (item.actionName && item.actionName == "Scrap")
                )
            })
        )

    }, [itemArray, cleanParamsKey, excludedNames, categoryExclusions])


    const sortedItemsData:DestinyInventoryItem[] = useMemo(()=>{
       return sanitizedItemsData.toSorted((a:DestinyInventoryItem, b:DestinyInventoryItem) => {
            const sortCategory0:number = (a.itemCategoryHashes && b.itemCategoryHashes) ? a.itemCategoryHashes[0] - b.itemCategoryHashes[0] : 0
            const sortTierType:number = (b.tierType ?? 0) - (a.tierType ?? 0)
            const sortCategory1:number = (a.itemCategoryHashes && b.itemCategoryHashes) ? a.itemCategoryHashes[1] - b.itemCategoryHashes[1] : 0
            const sortCategory2:number = (a.itemCategoryHashes && b.itemCategoryHashes) ? a.itemCategoryHashes[2] - b.itemCategoryHashes[2] : 0
            const sortItemName:number = (a.itemName ? a.itemName.replace(/[^a-zA-Z0-9]/g, "") : '').localeCompare(b.itemName ? b.itemName.replace(/[^a-zA-Z0-9]/g, "") : '')
            const sortLightMax:number = (a.stats && a.stats[intellectStat] && b.stats && b.stats[intellectStat]) ? b.stats[intellectStat].maximum - a.stats[intellectStat].maximum : 0
    
            return (
                sortCategory0
                || sortCategory1
                || sortCategory2
                || sortTierType
                || sortLightMax
                || sortItemName
                // || sortItemName
                // || sortCategory1
                // || sortCategory2
            )
        })

    },[sanitizedItemsData])

    return (
        <section className='resultslist'>
            <div className="resultslist-header">
                <h2>{sortedItemsData.length.toLocaleString('en-US')} Results</h2>
                {!isAboveTablet && 
                <ItemResultsMobileFilterModal />
                }
                <ItemResultsPerPage options={[
                    {value:12},
                    {value:24},
                    {value:30},
                    {value:48},
                    {value:72},
                    {value:96},
                ]}/>
            </div>
            <PaginatedItems itemsPerPage={itemsPerPage ?? 30} sortedItemsData={sortedItemsData} />
        </section>
    )
}
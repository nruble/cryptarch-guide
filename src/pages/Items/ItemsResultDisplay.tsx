import './ItemsResultDisplay.scss'
import { useEffect, useState, useMemo } from 'react'
import { useSearchParams, Link, useLoaderData } from 'react-router-dom'
import ResponsivePagination from 'react-responsive-pagination'
import type { DestinyInventoryItem } from '../../types'
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri"
import ItemResultsPerPage from './ItemResultsPerPage'
import ItemResultsMobileFilterModal from './ItemResultsMobileFilterModal'
import { useMediaQuery } from 'react-responsive'


const categoryExclusions = [15, 16, 17, 24, 25, 26, 32, 34, 36, 37, 44, 50, 53, 55]
const excludedNames = ["###Destiny.CLASSIFIED_v260_NAME###", "Reforge Weapon", "Bank TEST"]


export default function ItemsResultDisplay(){
    // const [dataManifest, setDataManifest] = useState<{}>({})
    const dataManifest = useLoaderData()
    // const [dataError, setDataError] = useState(null)
    // const [dataLoading, setDataLoading] = useState<boolean>(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const isAboveTablet = useMediaQuery({ query: '(min-width: 769px)'})
    
    // useEffect(()=>{
    //     fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
    //         .then(result => {
    //             if(!result.ok) throw new Error('Failed to fetch Inventory Item Definitions')
    //             return result.json()
    //         })
    //         .then(data => {
    //             setDataManifest(data)
    //         })
    //         .catch(err => {
    //             setDataError(err.message)
    //         })
    //         .finally(() => {
    //             setDataLoading(false)
    //         })
    // }, [])
    
    const itemArray:DestinyInventoryItem[] = useMemo(()=> {
        return Object.values(dataManifest)
    },[dataManifest])

    const itemsPerPage:number = useMemo(():number =>{
        return searchParams.getAll("display").map((entry:string):number => parseInt(entry))[0]
    },[searchParams])


    const sanitizedItemsData:DestinyInventoryItem[] = useMemo(():DestinyInventoryItem[] => {
        const searchCategories:number[] = searchParams.getAll("category").map((entry:string):number => parseInt(entry))
        const searchSlots:number[] = searchParams.getAll('slot').map((entry:string):number => parseInt(entry))
        const searchClasses:number[] = searchParams.getAll('class').map((entry:string):number => parseInt(entry))
        const searchTypes:number[] = searchParams.getAll('type').map((entry:string):number => parseInt(entry))
        const searchRarity:number[] = searchParams.getAll('rarity').map((entry:string):number => parseInt(entry))
        const searchSource:number[] = searchParams.getAll('asrc').map((entry:string):number => parseInt(entry))
        const searchVendor:number[] = searchParams.getAll('vsrc').map((entry:string):number => parseInt(entry))
        
        return (
            itemArray.filter((item: DestinyInventoryItem) => {
                const itemHashes:number[] = (item.itemCategoryHashes ?? []).map(Number)
                const itemSources:number[] = (item.sourceHashes ?? []).map(Number)
                const matchesCategory:boolean = searchCategories.length === 0 || searchCategories.every((category:number):boolean => itemHashes.includes(category))
                const matchesSlot:boolean = searchSlots.length === 0 || searchSlots.some((category:number):boolean => itemHashes.includes(category))
                const matchesClass:boolean = searchClasses.length == 0 || searchClasses.some((category:number):boolean => itemHashes.includes(category)) || item.classType == 3 
                const matchesType:boolean =  searchTypes.length == 0 || searchTypes.some((category:number):boolean => itemHashes.includes(category)) 
                const matchesRarity:boolean = searchRarity.length == 0 || searchRarity.some((tier:number):boolean => item.tierType === tier)
                const matchesSource:boolean = searchSource.length == 0 || searchSource.some((source:number):boolean => itemSources.includes(source))
                const matchesVendor:boolean = searchVendor.length == 0 || searchVendor.some((source:number):boolean => itemSources.includes(source)) || searchVendor.some((source:number):boolean => itemSources.length == source)

                return Boolean(
                    item.icon
                    && item.itemName
                    && !excludedNames.some((name:string):boolean => item.itemName == name)
                    && itemHashes.length > 0
                    && !categoryExclusions.some((category:number):boolean => itemHashes.includes(category))
                    && matchesCategory && matchesSlot && matchesClass && matchesType && matchesRarity && matchesSource && matchesVendor
                )
            })
        )

    }, [itemArray, searchParams, excludedNames, categoryExclusions])
    

    // if (dataLoading) return (
    //     <>
    //         <h2>Loading…</h2>
    //     </>
    // )
    // if (dataError) return (
    //     <>
    //         <h2>{dataError}</h2>
    //     </>
    // )


    const sortedItemsData:DestinyInventoryItem[] = sanitizedItemsData.toSorted((a:DestinyInventoryItem, b:DestinyInventoryItem) => {
        const sortCategory0:number = (a.itemCategoryHashes && b.itemCategoryHashes) ? a.itemCategoryHashes[0] - b.itemCategoryHashes[0] : 0
        const sortTierType:number = (b.tierType ?? 0) - (a.tierType ?? 0)
        const sortCategory1:number = (a.itemCategoryHashes && b.itemCategoryHashes) ? a.itemCategoryHashes[1] - b.itemCategoryHashes[1] : 0
        const sortCategory2:number = (a.itemCategoryHashes && b.itemCategoryHashes) ? a.itemCategoryHashes[2] - b.itemCategoryHashes[2] : 0
        const sortItemName:number = (a.itemName ?? '').localeCompare(b.itemName ?? '')

        return (
            sortCategory0
            || sortTierType
            || sortCategory1
            || sortCategory2
            || sortItemName
        )
    })

    function Items({ currentItems }:{currentItems:DestinyInventoryItem[]}) {
        return (
            <div className='resultslist-container'>
            {currentItems && currentItems.map((item: DestinyInventoryItem) => (
                <Link to={`/item/${item.itemHash}`} className='resultslist-item' key={`${item.itemHash}`}>
                    <img src={`/data/d1_icons${item.icon}`} alt={`${item.itemName} Icon`} className='resultslist-item-icon' />
                    <h3>{item.itemName}</h3>
                </Link>
            ))}
            </div>
        )
    }

    function PaginatedItems({ itemsPerPage }:{itemsPerPage: number}) {
        const [itemOffset, setItemOffset] = useState<number>(0)
        const [currentPage, setCurrentPage] = useState<number>(1)
        const pageCount:number = useMemo(()=> {
            return Math.ceil(sortedItemsData.length / itemsPerPage)
        },[sortedItemsData.length, itemsPerPage])
        const currentItems:DestinyInventoryItem[] = useMemo(()=>{
            const endOffset:number = itemOffset + itemsPerPage
            return [...sortedItemsData.slice(itemOffset, endOffset)]
        },[sortedItemsData, itemOffset, itemsPerPage])


        function handlePageChange(page:number) {
            const newOffset = (page * itemsPerPage) - itemsPerPage
            setItemOffset(newOffset)
            setCurrentPage(page)
        }

        return (
            <>
                <Items currentItems={ currentItems } />
                <div className='resultslist-pagination-wrapper'>   
                    <ResponsivePagination 
                        current={ currentPage }
                        total={ pageCount }
                        onPageChange={(page) => handlePageChange(page)}
                        className="resultslist-pagination"
                        nextLabel={<RiArrowRightSFill />}
                        previousLabel={<RiArrowLeftSFill />}
                        activeItemClassName='active'
                        disabledItemClassName='disabled'
                        nextClassName='next-btn'
                        previousClassName='prev-btn'
                        breakLabel={
                            <>
                                <span className='resultslist-pagination-break'></span>
                                <span className='resultslist-pagination-break'></span>
                                <span className='resultslist-pagination-break'></span>
                            </>
                        }
                        />
                </div>
            </>
        )
    }

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
            <PaginatedItems itemsPerPage={itemsPerPage ?? 30} />
        </section>
    )
}
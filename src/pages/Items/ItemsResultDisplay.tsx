import { useEffect, useState, useMemo } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
import type { DestinyInventoryItem } from '../../types'
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri"


export default function ItemsResultDisplay(){
    const [dataManifest, setDataManifest] = useState<{}>({})
    const [dataError, setDataError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)
    
    useEffect(()=>{
        fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
            .then(result => {
                if(!result.ok) throw new Error('Failed to fetch Inventory Item Definitions')
                return result.json()
            })
            .then(data => {
                setDataManifest(data)
                setDataLoading(false)
            })
            .catch(err => {
                setDataError(err.message)
                setDataLoading(false)
            })
    }, [])

    if (dataLoading) return (
        <>
            <h2>Loading…</h2>
        </>
    )
    if (dataError) return (
        <>
            <h2>{dataError}</h2>
        </>
    )

    const itemArray:DestinyInventoryItem[] = Object.values(dataManifest)
    const sanitizedItemsData:DestinyInventoryItem[] = itemArray.filter((item: DestinyInventoryItem)=>{
        return (
            item.icon && item.itemName 
            && item.itemName !== "###Destiny.CLASSIFIED_v260_NAME###" 
            && item.itemName !== "Reforge Weapon"
            && item.itemName !== "Bank TEST" 
            && item.itemCategoryHashes.length > 0
            && !item.itemCategoryHashes.includes(16)
            && !item.itemCategoryHashes.includes(17)
            && !item.itemCategoryHashes.includes(32)
            && !item.itemCategoryHashes.includes(36)
            && !item.itemCategoryHashes.includes(37)
            && !item.itemCategoryHashes.includes(50)
        )
    })
    const sortedItemsData:DestinyInventoryItem[] = sanitizedItemsData.toSorted((a:DestinyInventoryItem, b:DestinyInventoryItem) => {
        return (
            a.itemCategoryHashes[a.itemCategoryHashes.length - 3] - b.itemCategoryHashes[b.itemCategoryHashes.length - 3]
            || a.itemCategoryHashes[a.itemCategoryHashes.length - 2] - b.itemCategoryHashes[b.itemCategoryHashes.length - 2]
            || a.itemCategoryHashes[a.itemCategoryHashes.length - 1] - b.itemCategoryHashes[b.itemCategoryHashes.length - 1]
            || b.tierType - a.tierType
            || a.itemName.localeCompare(b.itemName)
        )
    })

    function Items({ currentItems }:{currentItems:DestinyInventoryItem[]}) {
        return (
            <div className='resultslist-container'>
            {currentItems && currentItems.map((item: DestinyInventoryItem) => (
                <div className='resultslist-item' key={`${item.itemHash}`}>
                    <img src={`/data/d1_icons${item.icon}`} alt={`${item.itemName} Icon`} className='resultslist-item-icon' />
                    <h3>{item.itemName}</h3>
                </div>
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
        <div>
            <h2>{sortedItemsData.length} Results</h2>
        </div>
        <PaginatedItems itemsPerPage={30} />
        </section>
    )
}
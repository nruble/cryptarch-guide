import './ItemsResultDisplay.scss'
import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import ResponsivePagination from 'react-responsive-pagination'
import type { DestinyInventoryItem } from '../../types'
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri"


function Items({ currentItems, itemsPerPage = 30 }:{currentItems:DestinyInventoryItem[], itemsPerPage:number}) {
    return (
        <div className='resultslist-container' style={{gridTemplateRows:`repeat(${itemsPerPage ? (itemsPerPage / 3) : 10}, 1fr)`}}>
        {currentItems && currentItems.map((item: DestinyInventoryItem) => (
            // <Link to={`/item/${item.itemHash}`} className='resultslist-item' key={`${item.itemHash}`}>
            //     <img src={`/data/d1_icons${item.icon}`} alt={`${item.itemName} Icon`} className='resultslist-item-icon' />
            //     <h3>{item.itemName}</h3>
            //     <p>{item.itemHash}</p>
            // </Link>
            <div className='resultslist-item' key={`${item.itemHash}`}>
                <img src={`/data/d1_icons${item.icon}`} alt={`${item.itemName} Icon`} className='resultslist-item-icon' />
                <h3>{item.itemName}</h3>
                <p>{item.itemHash}</p>
            </div>
        ))}
        </div>
    )
}

export default function PaginatedItems({ itemsPerPage, sortedItemsData }:{itemsPerPage: number, sortedItemsData:DestinyInventoryItem[]}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState<number>(
        () => parseInt(searchParams.get('page') ?? '1')
    )
    
    const pageCount:number = useMemo(()=> {
        return Math.ceil(sortedItemsData.length / itemsPerPage)
    },[sortedItemsData.length, itemsPerPage])

    const currentItems:DestinyInventoryItem[] = useMemo(()=>{
        const offset:number = (currentPage * itemsPerPage) - itemsPerPage
        return [...sortedItemsData.slice(offset, offset + itemsPerPage)]
    },[sortedItemsData, currentPage, itemsPerPage])


    function handlePageChange(page:number){
        setCurrentPage(page)
        setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            next.delete('page')
            page != 1 && next.set('page', page.toString())
            return next
        }, {replace:true})
    }

    return (
        <>
            <Items currentItems={ currentItems } itemsPerPage={itemsPerPage} />
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
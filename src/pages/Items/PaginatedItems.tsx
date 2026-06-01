import './PaginatedItems.scss'
import { useState, useMemo } from 'react'
// import { useSearchParams, Link } from 'react-router-dom'
import ResponsivePagination from 'react-responsive-pagination'
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri"
import SimpleDisplayItem from '../../components/SimpleDisplayItem/SimpleDisplayItem'


function Items({ currentItems}:{currentItems:string[]}) {
    return (
        <div className='resultslist-container' >
        {currentItems && currentItems.map((item: string) => (
            <SimpleDisplayItem itemHash={item} key={`${item}`} />
        ))}
        </div>
    )
}

export default function PaginatedItems({ itemsPerPage, sortedItemsList }:{itemsPerPage: number, sortedItemsList:string[]}) {
    //const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState<number>(
        // () => parseInt(searchParams.get('page') ?? '1') // this was for storing current page into URL
        1
    )
    
    const pageCount:number = useMemo(()=> {
        return Math.ceil(sortedItemsList.length / itemsPerPage)
    },[sortedItemsList.length, itemsPerPage])

    const currentItems:string[] = useMemo(()=>{
        const offset:number = (currentPage * itemsPerPage) - itemsPerPage
        return [...sortedItemsList.slice(offset, offset + itemsPerPage)]
    },[sortedItemsList, currentPage, itemsPerPage])


    function handlePageChange(page:number){
        setCurrentPage(page)
        // setSearchParams(prev => {
        //     const next = new URLSearchParams(prev)
        //     next.delete('page')
        //     //page != 1 && next.set('page', page.toString())
        //     next.set('page', page.toString())
        //     return next
        // }, {replace:true}) // this was for storing current page into URL. removed function as it behaved poorly on certain browser Back uses, and also needed to be fixed to revert to page 1 if any other params change to not be stranded on non-existent pages in some cases.
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
import './List.scss'
import PageHeading from '../../components/PageHeading/PageHeading'
import PageSections from '../../components/PageSections/PageSections'

import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import type { DestinyInventoryItem, ListPage} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'

export default function List() {
    const {lists} = useLoaderData()
    const listTag:string = useParams<string>().listTag ?? ''
    const listPage:ListPage = useMemo(()=>{
        return lists[listTag]
    },[lists, listTag])

    return(
        <>
            <title>{`${listPage.headline} | Cryptarch Guide`}</title>
            <PageHeading 
                icon={listPage.pageIcon} 
                headline={listPage.headline} 
                subtitle={listPage.subtitle} 
                flavor={listPage.flavorText} 
            />
            <PageSections sectionData={listPage} />
        </>
    )
}
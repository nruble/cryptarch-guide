import './Box.scss'
import BoxHeading from './BoxHeading'
import BoxSections from './BoxSections'
import PageHeading from '../../components/PageHeading/PageHeading'
import PageSections from '../../components/PageSections/PageSections'

import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import type { DestinyInventoryItem, RewardBoxPage} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'

export default function Box() {
    const {boxes} = useLoaderData()
    const boxTag:string = useParams<string>().boxTag ?? ''
    const rewardBox:RewardBoxPage = useMemo(()=>{
        return boxes[boxTag]
    },[boxes, boxTag])

    return(
        <>
            <title>{`${rewardBox.headline} | Cryptarch Guide`}</title>
            <PageHeading 
                icon={rewardBox.pageIcon} 
                headline={rewardBox.headline} 
                subtitle={rewardBox.subtitle} 
                flavor={rewardBox.flavorText} 
            />
            <PageSections sectionData={rewardBox} />
        </>
    )
}
import './Box.scss'
import PageHeading from '../../components/PageHeading/PageHeading'
import PageSections from '../../components/PageSections/PageSections'

import { useMemo } from 'react'
import type { RewardBoxPage} from '../../types'
import { useParams, useLoaderData } from 'react-router-dom'

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
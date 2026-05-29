import './Activity.scss'
import PageHeading from '../../components/PageHeading/PageHeading'
import ActivityHeading from '../../components/ActivityHeading/ActivityHeading'
import PageSections from '../../components/PageSections/PageSections'
import RaidLootTable from '../../components/RaidLootTable/RaidLootTable'

import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import type { DestinyInventoryItem, ActivityPage} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'

export default function Activity() {
    const {activities} = useLoaderData()
    const activityTag:string = useParams<string>().activityTag ?? ''
    const activityData:ActivityPage = useMemo(()=>{
        return activities[activityTag]
    },[activities, activityTag])

    return(
        <>
            <title>{`${activityData.headline} | Cryptarch Guide`}</title>
            <ActivityHeading />
            {"raidLootTable" in activityData && activityData.raidLootTable &&
                <RaidLootTable data={activityData.raidLootTable} />
            }
            <PageSections sectionData={activityData} />
        </>
    )
}
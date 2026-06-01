import './Activity.scss'
import { redirect } from 'react-router-dom'
import { useMemo } from 'react'
import type { ActivityPage} from '../../types'
import { useParams, useLoaderData } from 'react-router-dom'
import ActivityHeading from '../../components/ActivityHeading/ActivityHeading'
import PageSections from '../../components/PageSections/PageSections'
import RaidLootTable from '../../components/RaidLootTable/RaidLootTable'


export default function Activity() {
    const {activities} = useLoaderData()
    const activityTag:string = useParams<string>().activityTag ?? ''
    const activityData:ActivityPage = useMemo(()=>{
        if(activityTag != '' && !Object.hasOwn(activities, activityTag)){
          throw redirect('/acquisition')
        }

        return activities[activityTag]
    },[activities, activityTag])

    return(
        <>
            <title>{`${activityData.headline} | Cryptarch Guide`}</title>
            <ActivityHeading />
            {"raidLootTable" in activityData && activityData.raidLootTable &&
                <RaidLootTable data={activityData.raidLootTable} />
            }
            <PageSections pageData={activityData} />
        </>
    )
}
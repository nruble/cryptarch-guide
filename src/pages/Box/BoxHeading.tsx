import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import type { DestinyInventoryItem, RewardBoxPage} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'

export default function BoxHeading({boxdata}:{boxdata:RewardBoxPage}) {
    // const {items, boxes} = useLoaderData()
    // const boxTag:string = useParams<string>().boxTag ?? ''
    // const rewardBox:RewardBoxPage = useMemo(()=>{
    //     return boxes[boxTag]
    // },[boxes, boxTag])

    return(
        <>
        <section className="page-heading">
            {boxdata.pageIcon &&
            <img src={`/data/d1_icons${boxdata.pageIcon}`} alt="" />
            }
            <div>
                <h1>{boxdata.headline}</h1>
                {boxdata.subtitle &&
                <p>{boxdata.subtitle}</p>
                }
                {boxdata.flavorText &&
                <p><i>{boxdata.flavorText}</i></p>
                }
            </div>
        </section>
        </>
    )
}
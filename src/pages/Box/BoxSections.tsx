import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import type { DestinyInventoryItem, RewardBoxPage} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import Markdown from 'react-markdown'

export default function BoxSections({boxdata}:{boxdata:RewardBoxPage}) {
    // const {items, boxes} = useLoaderData()
    // const boxTag:string = useParams<string>().boxTag ?? ''
    // const rewardBox:RewardBoxPage = useMemo(()=>{
    //     return boxes[boxTag]
    // },[boxes, boxTag])

    const boxSectionElements = boxdata.sections.map((section) => {
        return (
            <section className='page-section'>
                {section.sectionTitle &&
                <h2 className='page-section-title'>{section.sectionTitle}</h2>
                }
                {section.textBlock &&
                <Markdown>{section.textBlock}</Markdown>
                }
                {section.wideItemDisplay &&
                <></>
                }
            </section>
        )
    })

    return(
        <>
        <section className="page-sections-container">
            {boxSectionElements}
        </section>
        </>
    )
}
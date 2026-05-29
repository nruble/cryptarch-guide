import './PageSections.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import Markdown from 'react-markdown'
import type { RewardBoxPage, ActivityPage, ListPage, WideItemDisplay, DividedItemDisplay, SubjectDetailCard, ActivityCardType} from '../../types'
import FalseItemLink from '../FalseItemLink/FalseItemLink'
import ItemDisplaySet from '../ItemDisplaySet/ItemDisplaySet'
import SimpleDisplayItem from '../SimpleDisplayItem/SimpleDisplayItem'
import BountyCard from '../BountyCard/BountyCard'
import SubjectCard from '../SubjectCard/SubjectCard'
import SummaryRewards from '../SummaryRewards/SummaryRewards'
import ActivityCard from '../ActivityCard/ActivityCard'

export default function PageSections({sectionData}:{sectionData:Pick<ActivityPage, "sections"> | Pick<RewardBoxPage, "sections"> | Pick<ListPage, "sections">}) {
    function subjectCardElements(data:SubjectDetailCard[]){
        return (
            data.map((cardObject:SubjectDetailCard, index)=>{
                return <SubjectCard data={cardObject} key={index}/>
            })
        )
    }

    function bountyCardElements(data:string[]){
        return(
            data.map((itemHash:string, index)=>{
                return <BountyCard itemHash={itemHash} key={index} />
            })
        )
    }

    function activityCardElements(data:ActivityCardType[]){
        return (
            data.map((cardObject:ActivityCardType, index) => {
                return <ActivityCard data={cardObject} key={index} />
            })
        )
    }

    function wideItemDisplay(data:WideItemDisplay) {
        return (
            <>
            {data.falseItemLinks &&
                data.falseItemLinks.map((linkObject, index) => {
                    return <FalseItemLink data={linkObject} key={index} />
                })
            }
            {data.sets &&
                data.sets.map((setObject, index) => {
                    return <ItemDisplaySet data={setObject} key={index} />
                })
            }
            {data.items &&
                data.items.map((itemHash, index) => {
                    return <SimpleDisplayItem itemHash={itemHash} minimize={data.minimizeItemList} key={index} />
                })
            }
            </>
        )
    }

    function dividedItemDisplay(data:DividedItemDisplay[]) {
        return data.map((division:DividedItemDisplay, index) => {
            return (
                <section className='divided-item-section' key={index}>
                    <h3>{division.divisionLabel}</h3>
                    <div className='divided-item-group'>
                        {wideItemDisplay(division)}
                    </div>
                </section>
            )
        })
    }

    const sectionElements = sectionData.sections.map((section, index) => {
        return (
            <section className='page-section' key={index}>
                {"sectionTitle" in section &&
                <h2 className='page-section-title'>{section.sectionTitle}</h2>
                }
                {"textBlock" in section &&
                <div className='page-section-textblock'>
                    <Markdown>{section.textBlock}</Markdown>
                </div>
                }
                {"summaryRewards" in section &&
                    <ul className='page-summary-rewards'>
                        <SummaryRewards rewardData={section.summaryRewards}/>
                    </ul>
                }
                {"subjectCards" in section &&
                    <div className={`subject-cards-container${section.subjectCards.columnCount > 1 ? ` columncount-${section.subjectCards.columnCount}`:``}`}>
                        {subjectCardElements(section.subjectCards.subjectDetailCards)}
                    </div>
                }
                {"bountyCards" in section &&
                    <div className='bounty-cards-container'>
                        {bountyCardElements(section.bountyCards)}
                    </div>
                }
                {"activityCards" in section &&
                    <div className='activity-cards-container'>
                        {activityCardElements(section.activityCards)}
                    </div>
                }
                {"wideItemDisplay" in section &&
                    <div className='wide-item-container'>
                        {wideItemDisplay(section.wideItemDisplay)}
                    </div>
                }
                {"dividedItemDisplay" in section &&
                    <div className='divided-item-container'>
                        {dividedItemDisplay(section.dividedItemDisplay)}
                    </div>
                }
            </section>
        )
    })

    return(
        <section className="page-sections-container">
            {sectionElements}
        </section>
    )
}
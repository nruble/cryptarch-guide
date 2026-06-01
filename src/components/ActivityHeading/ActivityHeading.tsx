import './ActivityHeading.scss'
import { useMemo } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import type { ActivityPage, ActivityHeadSection } from '../../types'
import Markdown from 'react-markdown'

export default function ActivityHeading(){
    const {activities} = useLoaderData()
    const activityTag:string = useParams<string>().activityTag ?? ''
    const activityData:ActivityPage = useMemo(()=>{
        return activities[activityTag]
    },[activities, activityTag])

    const backgroundStyle = useMemo(()=> {
        if("headerBackgroundUrl" in activityData && activityData.headerBackgroundUrl !== ""){
            return {
                background:`linear-gradient(rgba(26,26,26,0.8), rgba(26,26,26,0.8)), url(${`/data/d1_icons${activityData.headerBackgroundUrl}`}) no-repeat center center / cover, linear-gradient(0deg,#5B555B 0%, #8A7E82 90%)`
            }
        }
        return {
            background:`linear-gradient(0deg,#5B555B 0%, #8A7E82 90%)`
        }
    },[activityData])

    function activityHeadSections(data:ActivityHeadSection[]) {
        
        return data.map((section:ActivityHeadSection, index)=>{
            const activityInfo = section.activityInfo ?? {} as Pick<ActivityHeadSection, "activityInfo">
            
            return (
                <section className='activity-head-section' key={index}>
                    {"sectionTitle" in section &&
                        <h2 className='activity-head-section-title'>{section.sectionTitle}</h2>
                    }
                    {"activityInfo" in section && 
                        <div className='activity-head-info'>
                            {"activityLevel" in activityInfo && activityInfo.activityLevel != '' &&
                                <p>Level: <b>{activityInfo.activityLevel}</b></p>
                            }
                            {"lightLevel" in activityInfo && activityInfo.lightLevel != '' &&
                                <p className='activity-head-light'>Recommended Light: <b>{activityInfo.lightLevel}</b></p>
                            }
                            {"modeType" in activityInfo && activityInfo.modeType != '' &&
                                <p>Mode Type: <b>{activityInfo.modeType}</b></p>
                            }
                            {"teamSize" in activityInfo && activityInfo.teamSize != '' &&
                                <p>Fireteam: <b>{activityInfo.teamSize}</b></p>
                            }
                            {"activityType" in activityInfo && activityInfo.activityType != '' &&
                                <p>{activityInfo.activityType}</p>
                            }
                            {"hasMatchmaking" in activityInfo && activityInfo.hasMatchmaking &&
                                <p>Matchmaking Enabled</p>
                            }
                        </div>
                    }
                    {"textBlock" in section &&
                        <div className='activity-head-section-textblock'>
                            <Markdown>{section.textBlock}</Markdown>
                        </div>
                    }
                </section>
            )
        })
    }
    
    return(
        <>
        <section 
            className="activity-heading" 
            style={backgroundStyle}
        >
            <div className='activity-headline'>
                {activityData.pageIcon &&
                    <img src={`/data/d1_icons${activityData.pageIcon}`} alt="" className='activity-heading-icon' />
                }
                <div className='activity-heading-main'>
                    <h1>{activityData.headline}</h1>
                    {activityData.subtitle &&
                        <p className='activity-heading-subtitle'>{activityData.subtitle}</p>
                    }
                    {activityData.flavorText &&
                        <p className='activity-heading-flavortext'>{activityData.flavorText}</p>
                    }
                </div>
            </div>
            {"headerSections" in activityData &&
                <div className='activity-header-sections'>
                    {activityHeadSections(activityData.headerSections)}
                </div>
            }
        </section>
        </>
    )
}
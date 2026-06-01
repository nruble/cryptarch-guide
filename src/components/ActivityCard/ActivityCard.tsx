import './ActivityCard.scss'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import type { ActivityCardType } from '../../types'
import { RiArrowRightSLine } from 'react-icons/ri'

export default function ActivityCard({data}:{data:ActivityCardType}) {
    const backgroundStyle = useMemo(()=> {
        return {
            background:`linear-gradient(rgba(39,39,39,0.8), rgba(39,39,39,0.8)), url(${`/data/d1_icons${data.backgroundUrl}`}) no-repeat center center / cover`
        }
    },[data.backgroundUrl])
    const activityCardInner = 
        <>
            <div className='activity-card-header'>
                <div className='activity-card-header-text'>
                    <h3>{data.title}</h3>
                    {"subtitle" in data && data.subtitle !== "" &&
                    <p>{data.subtitle}</p>
                    }  
                </div>
                {"linkUrl" in data && data.linkUrl !== "" &&
                <RiArrowRightSLine />
                }
            </div>
            <div className='activity-card-body'>
                {"level" in data && data.level !== "" &&
                <p className='activity-card-level'>Level: <b>{data.level}</b></p>
                }
                {"lightLevel" in data && data.lightLevel !== "" &&
                <p className='activity-card-light'>Recommended Light: <b>{data.lightLevel}</b></p>
                }
                {"description" in data && data.description !== "" &&
                <p className='activity-card-description'>{data.description}</p>
                }
            </div>
        </>

    if("linkUrl" in data && data.linkUrl !== ""){
        return (
            <Link to={data.linkUrl} className='activity-card is-link' style={backgroundStyle}>
                {activityCardInner}
            </Link>
        )
    }

    return(
        <div className='activity-card' style={backgroundStyle}>
            {activityCardInner}
        </div>
    )
}
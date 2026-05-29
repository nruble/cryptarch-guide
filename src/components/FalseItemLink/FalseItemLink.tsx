import './FalseItemLink.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import { useSearchParams, Link, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem, RewardBoxPage, FalseItemLink} from '../../types'
import Markdown from 'react-markdown'

export default function FalseItemLink({data}:{data:FalseItemLink}) {
    const falseLinkInner = 
        <>
            {data.iconUrl &&
            <img src={`/data/d1_icons${data.iconUrl}`} alt="" className='false-item-icon' />
            }
            <div className='false-item-body'>
                <p className='display-item-label'>{data.labelText}</p>
                {data.labelSubtitle &&
                <p>{data.labelSubtitle}</p>
                }
            </div>
        </>

    if(data.linkUrl){
        return(
            <Link to={data.linkUrl} className='false-item-container'>
                {falseLinkInner}
            </Link>
        )
    }

    return (
        <div className='false-item-container'>
            {falseLinkInner}
        </div>
    )
}
import './SummaryRewards.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import { useSearchParams, Link, useLoaderData } from 'react-router-dom'
import type { SubjectDetailCard, SummaryReward } from '../../types'
import Markdown from 'react-markdown'

export default function SummaryRewards({rewardData}:{rewardData:SummaryReward[]}) {
    return rewardData.map((reward:SummaryReward, index)=> {
        return (
            <li className='summary-reward-entry' key={index}>
                <img src={`/data/d1_icons${reward.iconUrl}`} alt="" className='summary-reward-icon' />
                <span> {reward.rewardText}</span>
            </li>
        )
    })
}
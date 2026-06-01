import './SummaryRewards.scss'
import type { SummaryReward } from '../../types'

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
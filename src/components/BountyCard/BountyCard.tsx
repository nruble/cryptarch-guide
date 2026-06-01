import './BountyCard.scss'
import { useMemo } from 'react'
import { useLoaderData } from 'react-router-dom'
import type { DestinyItemBounty, DestinyObjective } from '../../types'

interface RewardValuesObject {
    [key: string]: number
}

export default function BountyCard({itemHash}:{itemHash:string}){
    const {items, objectives}:{items:DestinyItemBounty[], objectives:DestinyObjective[]} = useLoaderData()
    const hashInt = parseInt(itemHash)
    const bountyData:DestinyItemBounty = useMemo(()=>{
        const thisBounty = items[hashInt]
        return {
            "itemHash": thisBounty.itemHash,
            "itemName": thisBounty.itemName,
            "itemDescription": thisBounty.itemDescription,
            "icon": thisBounty.icon,
            "displaySource": thisBounty.displaySource,
            "itemTypeName": thisBounty.itemTypeName,
            "rewardItemHash": thisBounty.rewardItemHash,
            "values": thisBounty.values,
            "sourceHashes": thisBounty.sourceHashes,
            "needsFullCompletion": thisBounty.needsFullCompletion,
            "objectiveVerb": thisBounty.objectiveVerb,
            "objectiveHashes": thisBounty.objectiveHashes
        }
    },[items, itemHash])
    const bountyObjective:DestinyObjective = useMemo(()=>{
        return objectives[bountyData.objectiveHashes[0]]
    },[objectives, bountyData.objectiveHashes])

    function BountyRewardElements(data:RewardValuesObject) {
        return Object.entries(bountyData.values).map(([key, value])=> {
            const rewardItemData = {
                "icon": items[parseInt(key)].icon,
                "text": items[parseInt(key)].itemName
            }
            return (
                <li key={rewardItemData.text}>
                    <img src={`/data/d1_icons${rewardItemData.icon}`} alt="" className='summary-reward-icon' />
                    <span>
                        {rewardItemData.text}
                        {value > 1 ?
                        ` +${value.toLocaleString('en-US')}`:
                        ``
                        }
                    </span>
                </li>
            )
        })
    }

    return(
        <article className='bounty-card'>
            <header className='bounty-header'>
                <img src={`/data/d1_icons${bountyData.icon}`} alt="" className='bounty-icon'/>
                <h3>{bountyData.itemName}</h3>
            </header>
            <div className='bounty-content'>
                {bountyData.itemDescription && 
                    <p className='bounty-description'>{bountyData.itemDescription}</p>
                }
                {bountyData.objectiveHashes.length >= 1 && 
                    <p className='bounty-objective'>
                        <span className='bounty-objective-label'>Goal: </span>
                        {bountyObjective.completionValue > 1 && bountyObjective.completionValue.toLocaleString('en-US')} {bountyObjective.displayDescription}
                    </p>
                }
                {bountyData.displaySource &&
                    <p className='bounty-quote'>{bountyData.displaySource}</p>
                }
                {bountyData.values &&
                    <div className='bounty-rewards'>
                        <h4>Rewards:</h4>
                        <ul>
                            {BountyRewardElements(bountyData.values)}
                        </ul>
                    </div>
                }
            </div>
        </article>
    )
}
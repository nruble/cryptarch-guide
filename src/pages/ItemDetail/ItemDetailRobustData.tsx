import { useEffect, useState, useMemo, Fragment } from 'react'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import { RiExternalLinkFill } from "react-icons/ri"
import type { DestinyInventoryItem, statsObject} from '../../types'
import ItemRobustStatPackage from './ItemRobusStatPackage'
import ItemRobustTalent from './ItemRobustTalent'


export default function ItemDetailRobustData() {
    const itemHash:string = useParams<string>().itemHash ?? ''
    const { items }  = useLoaderData()
    const itemData:DestinyInventoryItem = items[itemHash]
    const itemType:number = itemData.itemType ?? 0
    const itemTalentHash:number = itemData.talentGridHash ?? 0

    if(itemType !== 3 && itemType !== 2 && itemType !== 14){
        return
    }

    return (
        <section className="itemdetail-robust">
            {itemType === 14 &&
            <div className='itemdetail-robust-emblem'>
                <h2>ASSEMBLED PREVIEW</h2>
                <div className="emblem-preview-wrapper">
                    <img src={`/data/d1_icons${itemData.icon}`} className="emblem-preview-icon" width={96} height={96} alt={`${itemData.itemName} emblem icon.`} />
                    <img src={`/data/d1_icons${itemData.secondaryIcon}`} className="emblem-preview-background"  width={474} height={96} alt={`Emblem background.`}/>
                </div>
                <a 
                    href={`https://www.destinyemblemcollector.com/destiny1/emblem?id=${itemData.itemHash}`} 
                    target="_blank"
                    className='emblem-external-link'
                >
                    Acquisition details via Destiny Emblem Collector <RiExternalLinkFill/>
                </a>
            </div>  
            }
            {(itemType == 3 || itemType == 2) &&
            <>
            <section className="itemdetail-robust-stat-container">
                {/* stats */}
                <ItemRobustStatPackage />
            </section>
            <section className="itemdetail-robust-feature-container">
                {/* talent grid perks & cosmetics */}
                <ItemRobustTalent itemTalentHash={itemTalentHash} itemType={itemType} />
            </section>
            </>
            }
        </section>
    )
}
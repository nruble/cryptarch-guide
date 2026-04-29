import { useEffect, useState, useMemo, Fragment } from 'react'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem, statsObject} from '../../types'
import ItemRobustStatPackage from './ItemRobusStatPackage'
import ItemRobustTalent from './ItemRobustTalent'


export default function ItemDetailRobustData() {
    const itemHash:string = useParams<string>().itemHash ?? ''
    const { items, talentGrid, perks }  = useLoaderData()
    const itemData:DestinyInventoryItem = items[itemHash]
    const itemType:number = itemData.itemType ?? 0
    const itemTalentHash:number = itemData.talentGridHash ?? 0

    if(itemType !== 3 && itemType !== 2){
        return
    }

    return (
        <section className="itemdetail-weapon">
            <section className="itemdetail-weapon-stat-container">
                {/* stats */}
                <ItemRobustStatPackage />
            </section>
            <section className="itemdetail-weapon-feature-container">
                {/* talent grid perks & cosmetics */}
                <ItemRobustTalent itemTalentHash={itemTalentHash} itemType={itemType} />
            </section>
        </section>
    )
}
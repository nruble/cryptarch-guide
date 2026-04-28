import './ItemDetail.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo } from 'react'
import type { DestinyInventoryItem, statsObject} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'

interface typelineObj {
    [key:string] : string
}

const TYPELINE_CATEGORY_MATCHES = [2, 3, 4, 23, 22, 21]
const typelineAdditions:typelineObj = {
    '0': '',
    '23': " / Hunter",
    '22': " / Titan",
    '21': " / Warlock",
    '2': " / Primary",
    '3': " / Special",
    '4': " / Heavy"
}

export default function ItemDetailHeading() {
    const itemHash:string = useParams<string>().itemHash ?? ''
    const { items }  = useLoaderData()
    const itemData:DestinyInventoryItem = items[itemHash]
    // const itemType:number = itemData.itemType ?? 0

    const typelineInsert:string = useMemo(()=>{
        const itemHashes:number[] = (itemData.itemCategoryHashes ?? []).map(Number)
        const confirmMatch:number[] = itemHashes.filter(cat => TYPELINE_CATEGORY_MATCHES.includes(cat))
        const newString:string = (
            confirmMatch.map(value => {
                return typelineAdditions[value]
            }).join('')
        )

        return (
            newString
        )

    },[itemData, TYPELINE_CATEGORY_MATCHES])
    
    return (
        <section className='itemdetail-heading'>
            <div className='itemdetail-head-wrapper'>
                <span className='itemdetail-icon-wrapper'>
                    <img src={`/data/d1_icons${itemData.icon}`} alt={`Icon of ${itemData.itemName}`} className="itemDetail-head-icon" />
                </span>
                <div className="itemDetail-head-info">
                    <h1 className="itemDetail-head-name">{itemData.itemName}</h1>
                    <h2 className="itemDetail-head-typeline">
                        {itemData.tierTypeName}
                        {typelineInsert}
                        {` / ${itemData.itemTypeName?.replace(/Warlock|Titan|Hunter|Armor/g, '')}`}
                    </h2>
                    {itemData.itemDescription && <p className="itemDetail-head-description">{itemData.itemDescription}</p>}
                </div>
            </div>
        </section>
    )
}
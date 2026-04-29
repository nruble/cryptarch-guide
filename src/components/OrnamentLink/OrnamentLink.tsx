import './OrnamentLink.scss'
import { useEffect, useState, useMemo, Fragment } from 'react'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem, DestinyTalentGrid, talentGridNode, talentGridNodeStep} from '../../types'

interface ornamentLinkObject {
    "itemName": string,
    "itemDescription": string,
    "icon": string,
    "itemHash": string
}

const ORNAMENT_FLAWLESS_VIGIL:ornamentLinkObject = {
    "itemName": "Flawless Vigil Ornament",
    "itemDescription": "Use this token to activate an Ornament for your Trials of Osiris Vigil armor.",
    "icon": "/common/destiny_content/icons/cb4e355299168bc0b6fbeac38ae9465b.jpg",
    "itemHash": "2601212255"
}

const ORNAMENT_DAYS_OF_IRON:ornamentLinkObject = {
    "itemName": "Days of Iron Ornament",
    "itemDescription": "Use this token to activate an Ornament for your Days of Iron armor.",
    "icon": "/common/destiny_content/icons/780a88e8cbd43134cb5fa4fe97ca6925.jpg",
    "itemHash": "3345355735"
}

const ORNAMENT_AGE_OF_TRIUMPH:ornamentLinkObject = {
    "itemName": "Age of Triumph Ornament",
    "itemDescription": "Use this token to activate an Ornament for your Age of Triumph raid armor.",
    "icon": "/common/destiny_content/icons/59a88ab77c5a10a5c98aaa37705eee03.jpg",
    "itemHash": "3974974481"
}

const ORNAMENT_SRL_CHAMPION:ornamentLinkObject = {
    "itemName": "SRL Champion's Ornament",
    "itemDescription": "Unlocks SRL ornaments on SRL gear.",
    "icon": "/common/destiny_content/icons/0d74eac93fe4c899ef92c4a995fe904b.jpg",
    "itemHash": "2341358813"
}

export default function OrnamentLink({ itemHash }:{itemHash:number}) {
    const { items }  = useLoaderData()
    const itemData:DestinyInventoryItem = useMemo(()=>{
        return items[itemHash]
    }, [items, itemHash])

    const hasIcon = useMemo(() => {
        if(itemData.icon === '/img/misc/missing_icon.png' || itemData.icon === '' || !itemData.icon){
            return false
        }
        return true
    },[itemData])

    // Convert incoming data into just the needed items. And alternatively if it's an armor ornament (no icon), then process and provide what it needs instead.
    const processedItemData:(ornamentLinkObject | DestinyInventoryItem) = useMemo(() => {
        if(hasIcon){
            return itemData
        }
        function getSource():string{
            if(!itemData.sourceHashes || itemData.sourceHashes.length === 0){
                return ''
            }
            return itemData.sourceHashes[0].toString()
        }
        const source = getSource()
        
        const newData:ornamentLinkObject = (
            source === '3378481830' 
            ? ORNAMENT_FLAWLESS_VIGIL 
            : source === '4061111816'
            ? ORNAMENT_DAYS_OF_IRON
            : ['440710167', '2585003248', '1662673928', '4161861381', '4160622434'].some(value => value === source)
            ? ORNAMENT_AGE_OF_TRIUMPH
            : ORNAMENT_SRL_CHAMPION
        )
        return newData
    }, [hasIcon, itemData])

    const description:string = useMemo(()=> {
        const itemDesc:string = processedItemData.itemDescription ?? ''
        const punctuationChars:RegExp = /[.!?]/
        const punctuation = itemDesc.match(punctuationChars) ?? ['.']
        return itemDesc.split(punctuationChars)[0].trim() + (punctuation.length > 0 && punctuation[0])
    }, [processedItemData])
    
    return (
        <Link to={`/item/${processedItemData.itemHash}`} className="ornament-link-box">
            <div className='ornament-link-icon'>
                <img src={`/data/d1_icons${processedItemData.icon}`} />
            </div>
            <div className='ornament-link-text'>
                <h3>{processedItemData.itemName}</h3>
                {processedItemData.itemDescription && <p>{description}</p>}
            </div>
        </Link>
    )
}
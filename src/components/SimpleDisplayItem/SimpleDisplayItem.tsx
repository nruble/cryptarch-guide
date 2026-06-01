import './SimpleDisplayItem.scss'
import { useMemo } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem} from '../../types'

export default function SimpleDisplayItem({itemHash, minimize = false}:{itemHash:string, minimize?:boolean}) {
    const {items}:{items:DestinyInventoryItem[]} = useLoaderData()
    const hashInt = parseInt(itemHash)
    const itemData = useMemo(()=>{
        return {
            "icon": items[hashInt].icon ?? "/img/destiny_content/items/set_blank.png",
            "name": items[hashInt].itemName ?? "",
            "url": `/item/${itemHash}`
        }
    },[items, itemHash])

    if(minimize){
        return(
            <Link to={itemData.url} className='simple-item-container minimized'>
                <img src={`/data/d1_icons${itemData.icon}`} className='simple-item-image' alt={itemData.name}/>
            </Link>
        )
    }

    return (
        <Link to={itemData.url} className='simple-item-container'>
            <img src={`/data/d1_icons${itemData.icon}`} alt="" className='simple-item-image'/>
            <p className='display-item-label'>{itemData.name}</p>
        </Link>
    )
}
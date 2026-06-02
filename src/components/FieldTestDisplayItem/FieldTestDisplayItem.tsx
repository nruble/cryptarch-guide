import './FieldTestDisplayItem.scss'
import { useMemo } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem} from '../../types'

export default function FieldTestDisplayItem({itemHash, trim1}:{itemHash:string, trim1:string}) {
    const {items}:{items:DestinyInventoryItem[]} = useLoaderData()
    const hashInt = parseInt(itemHash)
    const itemData = useMemo(()=>{
        return {
            "icon": items[hashInt].icon ?? "/img/destiny_content/items/set_blank.png",
            "name": items[hashInt].itemName ?? "",
            "description": items[hashInt].itemDescription ?? '',
            "url": `/item/${itemHash}`
        }
    },[items, itemHash])

    return (
        <Link to={itemData.url} className='simple-item-container'>
            <img src={`/data/d1_icons${itemData.icon}`} alt="" className='simple-item-image'/>
            <div className='fieldtest-item-text'>
              <p className='fieldtest-item-label'>{itemData.name}</p>
              <p className='fieldtest-item-desc'>{itemData.description.replace(trim1, '')}</p>
            </div>
        </Link>
    )
}
import './ItemDisplaySet.scss'
import { useMemo } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem, ItemDisplaySetType} from '../../types'

export default function ItemDisplaySet({data}:{data:ItemDisplaySetType}) {
    const blankItemPlaceholder = "/img/destiny_content/items/blank.png"
    const {items}:{items:DestinyInventoryItem[]} = useLoaderData()
    const setIcons = useMemo(()=>{
        return data.setItems.map((itemHash:string)=>{
            if(itemHash === "0"){
                return ({
                    "name": "No Item",
                    "icon": blankItemPlaceholder,
                    "url": ""
                })
            }
            return (
                {
                    "name": items[parseInt(itemHash)].itemName ?? "",
                    "icon": items[parseInt(itemHash)].icon ?? "",
                    "url": `/item/${itemHash}`
                }
                )
        })
    },[items, data])

    
    const iconElements = setIcons.map((iconObject, index)=>{
        const iconInner = <img src={`/data/d1_icons${iconObject.icon}`} alt={`${iconObject.name}, set piece ${index}`} />

        if(iconObject.icon === blankItemPlaceholder){
            return <span className='set-item-icon' key={index}>{iconInner}</span>
        }
        return <Link to={iconObject.url} className='set-item-icon' key={index}>{iconInner}</Link>
    })

    return(
        <div className='set-item-container'>
            <div className='set-item-icongroup'>
                {iconElements}
            </div>
            <div className='set-item-labels'>
                <p className='display-item-label'>{data.setLabel}</p>
                {data.setSubtitle &&
                <p>{data.setSubtitle}</p>
                }
            </div>
        </div>
    )
}
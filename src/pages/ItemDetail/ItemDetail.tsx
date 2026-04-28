import './ItemDetail.scss'
// import { useMediaQuery } from 'react-responsive'
// import type { DestinyInventoryItem} from '../../types'
// import { useParams, useLoaderData } from 'react-router-dom'
import ItemDetailRobustData from './ItemDetailRobustData'
import ItemDetailHeading from './ItemDetailHeading'


export default function ItemDetail() {
    // const itemHash:string = useParams<string>().itemHash ?? ''
    // const { items, talentGrid, perks }  = useLoaderData()
    // const itemData:DestinyInventoryItem = items[itemHash]
    // const itemType:number = itemData.itemType ?? 0


    return (
        <>
        <ItemDetailHeading />
        <ItemDetailRobustData/>

        </>
    )
}
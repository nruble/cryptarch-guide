import './FalseItemLink.scss'
import { Link } from 'react-router-dom'
import type { FalseItemLinkType} from '../../types'

export default function FalseItemLink({data}:{data:FalseItemLinkType}) {
    const falseLinkInner = 
        <>
            {data.iconUrl &&
            <img src={`/data/d1_icons${data.iconUrl}`} alt="" className='false-item-icon' />
            }
            <div className='false-item-body'>
                <p className='display-item-label'>{data.labelText}</p>
                {data.labelSubtitle &&
                <p>{data.labelSubtitle}</p>
                }
            </div>
        </>

    if(data.linkUrl){
        if(data.linkUrl.startsWith('#')){
          return(
            <a href={data.linkUrl} className='false-item-container'>
                {falseLinkInner}
            </a>
          )
        }
        return(
            <Link to={data.linkUrl} className='false-item-container'>
                {falseLinkInner}
            </Link>
        )
    }

    return (
        <div className='false-item-container'>
            {falseLinkInner}
        </div>
    )
}
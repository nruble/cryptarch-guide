
import './EmblemDisplay.scss'
import { RiExternalLinkFill } from "react-icons/ri"
import type { DestinyInventoryItem} from '../../../../types'

export default function EmblemDisplay({itemData}:{itemData:DestinyInventoryItem}) {
      return (
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
      )
    }
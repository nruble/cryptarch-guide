import './VendorDetailSection.scss'
import { Fragment } from 'react'
import type { NewVendorPageData, FactionRepType, VendorSalesType, VendorPageSaleItem, FalseItemLinkType, ItemDisplaySetType} from '../../types'
import Markdown from 'react-markdown'
import FalseItemLink from '../../components/FalseItemLink/FalseItemLink'
import ItemDisplaySet from '../../components/ItemDisplaySet/ItemDisplaySet'
import SimpleDisplayItem from '../../components/SimpleDisplayItem/SimpleDisplayItem'

interface RankLevelType { 
  "label": string,
  "cost": string 
}

export default function VendorDetailSection({data}:{data:NewVendorPageData}) {

  function factionRankElements(rankLevels:RankLevelType[]) {
    return rankLevels.map((rank:RankLevelType)=>{
      return (
        <Fragment key={`${rank.label}`}>
          <dt>{rank.label}</dt>
          <dd>{parseInt(rank.cost).toLocaleString('en-US')}</dd>
        </Fragment>
      )
    })
  }

  function factionRepElements(data:FactionRepType[]){
    return data.map((faction:FactionRepType, index)=> {
      return (
        <Fragment key={`${faction.repName}-${index}`}>
          <div className='vendor-faction-headline'>
            {"repIcon" in faction && faction.repIcon != '' &&
              <img src={`/data/d1_icons${faction.repIcon}`} alt={`${faction.repName} faction icon.`} />
            }
          </div>
          <div className='vendor-faction-content'>
            {"repName" in faction && faction.repName != '' &&
              <h2 className='vendor-faction-name'>{faction.repName}</h2>
            }
            {"repDescription" in faction && faction.repDescription != '' &&
              <div className='vendor-faction-desc'>
                <Markdown>{faction.repDescription}</Markdown>
              </div>
            }
            {"rankLevels" in faction && faction.rankLevels.length > 0 &&
              <div className='vendor-faction-levels'>
                <h3>Reputation Ranks</h3>
                <dl>
                  {factionRankElements(faction.rankLevels)}
                </dl>
              </div>
            }
          </div>
        </Fragment>
      ) 
    })
  }

  function vendorSaleItemElements(data:VendorPageSaleItem){
      return (
        <>
          {"falseItemLinks" in data && data.falseItemLinks.length > 0 &&
            data.falseItemLinks.map((linkObject:FalseItemLinkType, index) => {
              return <FalseItemLink data={linkObject} key={`${linkObject.labelText}-${index}`} />
            })
          }
          {"sets" in data && data.sets.length > 0 &&
            data.sets.map((setObject:ItemDisplaySetType, index) => {
              return <ItemDisplaySet data={setObject} key={`${setObject.setLabel}-${index}`} />
            })
          }
          {"items" in data && data.items.length > 0 &&
            data.items.map((itemHash:string, index) => {
              return <SimpleDisplayItem itemHash={itemHash} minimize={data.minimizeItemList} key={`${itemHash}-${index}`} />
              // return <SimpleDisplayItem itemHash={itemHash} minimize={data.minimizeItemList} key={`${itemHash}-${index}`} />
            })
          }
        </>
      )
  }

  function vendorSalesElements(data:VendorSalesType[]){
    return data.map((sale:VendorSalesType, index)=>{
      return (
        <section className='vendor-page-sale' key={`${sale.saleTitle}-${index}`}>
          {"saleTitle" in sale && sale.saleTitle != '' &&
            <h3 className='vendor-sale-title'>{sale.saleTitle}</h3>
          }
          <div className={`vendor-page-sale-item-container${sale.saleItems.minimizeItemList ? ' minimized': ''}`}>
            {vendorSaleItemElements(sale.saleItems)}
          </div>
          {"saleFootnote" in sale && sale.saleFootnote != '' &&
            <div className='vendor-sale-footnote'>
              <Markdown>{sale.saleFootnote}</Markdown>
            </div>
          }
        </section>
      )
    })
  }

  return (
    <section className='vendor-detail-container'>
      {"repFactions" in data && data.repFactions.length > 0 &&
        <div className='vendor-detail-rep-section'>
          {factionRepElements(data.repFactions)}
        </div>
      }
      {"sales" in data && data.sales.length > 0 &&
        <div className='vendor-detail-sale-section'>
          {vendorSalesElements(data.sales)}
        </div>
      }
    </section>
  )
}
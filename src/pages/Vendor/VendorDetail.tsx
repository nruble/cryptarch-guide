import './VendorDetail.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState, Fragment, type ReactElement } from 'react'
import type { DestinyInventoryItem, statsObject, CustomVendorPageData, CustomVendorPageSale, CustomVendorPageSaleItem, CustomVendorSpecialInfo} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'

export default function VendorDetail(){
    const {items, vendors, repPackages} = useLoaderData()
    const vendorTag:string = useParams<string>().vendorTag ?? ''
    // type vendorDataset = {[key:string] : CustomVendorPageData}
    // const [vendorData] = useState<vendorDataset>(vendorPageData)
    const vendor:CustomVendorPageData = useMemo(()=>{
        return vendors[vendorTag]
    },[vendors, vendorTag])

    function saleItemElements(sale:CustomVendorPageSale) {
        return sale.saleItems.map((item:CustomVendorPageSaleItem) =>{ 
            if(item.itemHash === "00000000"){
                return
            }
            const saleItemData = items[item.itemHash]
            const isLinkOverride:boolean = item.linkOverride
            const isLinkHash:boolean = item.link.startsWith('#')

            if(isLinkHash && isLinkOverride){
                return (
                    <a 
                        href={item.link} 
                        key={item.itemHash} 
                        className={`vendor-sale-item-wrapper${item.showName ? ` name-displayed` : ''}`}
                    >
                        <img src={saleItemData.icon ? `/data/d1_icons${saleItemData.icon}` : `/data/d1_icons/img/misc/missing_icon.png`} alt={`${saleItemData.itemName} icon`} className='vendor-sale-item-icon' />
                        {item.showName &&
                        <h4 className='vendor-sale-item-name'>{item.nameOverride ? item.name : saleItemData.itemName}</h4>
                        }
                    </a>
                )
            }

            return (
                <Link 
                    to={
                        item.linkOverride 
                        ? item.link 
                        : `/item/${item.itemHash}`
                    } 
                    key={item.itemHash} 
                    className={`vendor-sale-item-wrapper${item.showName ? ` name-displayed` : ''}`}
                >
                    <img src={saleItemData.icon ? `/data/d1_icons${saleItemData.icon}` : `/data/d1_icons/img/misc/missing_icon.png`} alt={`${saleItemData.itemName} icon`} className='vendor-sale-item-icon' />
                    {item.showName &&
                    <h4 className='vendor-sale-item-name'>{item.nameOverride ? item.name : saleItemData.itemName}</h4>
                    }
                </Link>
            )
        })
    }

    function specialInformationItemsElements(specialItems:CustomVendorPageSaleItem[]) {
        return specialItems.map((item:CustomVendorPageSaleItem)=> {
            if(item.itemHash === "00000000"){
                return
            }
            const saleItemData = items[item.itemHash]
            const isLinkOverride:boolean = item.linkOverride
            const isLinkHash:boolean = item.link.startsWith('#')

            if(isLinkHash && isLinkOverride){
                return (
                    <a 
                        href={item.link} 
                        key={item.itemHash} 
                        className={`vendor-specialinfo-item-wrapper${item.showName ? ` name-displayed` : ''}`}
                    >
                        <img src={saleItemData.icon ? `/data/d1_icons${saleItemData.icon}` : `/data/d1_icons/img/misc/missing_icon.png`} alt={`${saleItemData.itemName} icon`} className='vendor-specialinfo-item-icon' />
                        {item.showName &&
                        <h4 className='vendor-specialinfo-item-name'>{item.nameOverride ? item.name : saleItemData.itemName}</h4>
                        }
                    </a>
                )
            }

            return (
                <Link 
                    to={
                        item.linkOverride 
                        ? item.link 
                        : `/item/${item.itemHash}`
                    } 
                    key={item.itemHash} 
                    className={`vendor-specialinfo-item-wrapper${item.showName ? ` name-displayed` : ''}`}
                >
                    <img src={saleItemData.icon ? `/data/d1_icons${saleItemData.icon}` : `/data/d1_icons/img/misc/missing_icon.png`} alt={`${saleItemData.itemName} icon`} className='vendor-specialinfo-item-icon' />
                    {item.showName &&
                    <h4 className='vendor-specialinfo-item-name'>{item.nameOverride ? item.name : saleItemData.itemName}</h4>
                    }
                </Link>
            )
        })
    }

    return (
        <>
        <section className='vendor-details'>
            {vendor.repFaction && 
            <section className="vendor-faction-container">
                <img src={`/data/d1_icons${vendor.repFaction.repIcon}`} alt={`${vendor.repFaction.repName} faction icon.`} className='vendor-faction-icon' />
                <div className='vendor-faction-info'>
                    <h3 className='vendor-faction-name'>{vendor.repFaction.repName}</h3>
                    <p className='vendor-faction-description'>{vendor.repFaction.repDescription}</p>
                    {vendor.repFaction.rankLevels && 
                    <div className='vendor-faction-ranks'>
                        <h4>Reputation Ranks</h4>
                        <dl>
                            {
                                vendor.repFaction.rankLevels.map(level=> 
                                <Fragment key={level.label}>
                                    <dt>{level.label}</dt>
                                    <dd>{parseInt(level.cost).toLocaleString('en-US')}</dd>
                                </Fragment>
                            )
                            }
                        </dl>
                    </div>
                    }
                </div>
            </section>
            }
            {vendor.specialInformation &&
            <section className="vendor-faction-container">
                {vendor.specialInformation.icon && 
                <img src={`/data/d1_icons${vendor.specialInformation.icon}`} alt={`${vendor.specialInformation.title} icon.`} className='vendor-faction-icon' />
                }
                <div className='vendor-faction-info'>
                    <h3 className='vendor-faction-name'>{vendor.specialInformation.title}</h3>
                    <p className='vendor-faction-description'>{vendor.specialInformation.description}</p>
                    {vendor.specialInformation.items && 
                    <div className='vendor-special-info-items-container'>
                        {specialInformationItemsElements(vendor.specialInformation.items)}
                    </div>
                    }
                </div>
            </section>

            }

            {vendor.sales && 
            <section className='vendor-sales-container'>
                {
                    vendor.sales.map((sale:CustomVendorPageSale) => 
                        <div key={`${sale.saleSection}-${sale.saleTitle.toLocaleLowerCase()}`} className='vendor-sale'>
                            <h3 className='vendor-sale-title'>{sale.saleTitle}</h3>
                            <div className='vendor-sale-items'>
                                {saleItemElements(sale)}
                            </div>
                            {(sale.saleFootnote !== "") && 
                                <p className='vendor-sale-footnote'>{sale.saleFootnote}</p>
                            }
                        </div>
                    )
                }
            </section>
            }
        </section>
        </>
    )
}
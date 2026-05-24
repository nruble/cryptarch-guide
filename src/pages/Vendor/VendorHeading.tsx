import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import type { DestinyInventoryItem, statsObject, CustomVendorPageData} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'


export default function VendorHeading() {
    const {items, vendors, repPackages} = useLoaderData()
    const vendorTag:string = useParams<string>().vendorTag ?? ''
    // type vendorDataset = {[key:string] : CustomVendorPageData}
    // const [vendorData] = useState<vendorDataset>(vendorPageData)
    const vendor:CustomVendorPageData = useMemo(()=>{
        return vendors[vendorTag]
    },[vendors, vendorTag])
    
    
    
    return (
        <>
        <title>{`${vendor.vendorTitle} | Cryptarch Guide`}</title>
        <section className='itemdetail-heading'>
            <div className='itemdetail-head-wrapper'>
                <span className='itemdetail-icon-wrapper'>
                    <img src={`/data/d1_icons${vendor.icon}`} alt={`Icon of ${vendor.vendorName}`} className="itemDetail-head-icon" />
                </span>
                <div className="itemDetail-head-info">
                    <h1 className="itemDetail-head-name">{vendor.vendorName}</h1>
                    <h2 className="itemDetail-head-typeline">
                        {vendor.vendorTitle}
                    </h2>
                    {vendor.vendorDescription && <p className="itemDetail-head-description">{vendor.vendorDescription}</p>}
                </div>
            </div>
        </section>
        </>
    )
}
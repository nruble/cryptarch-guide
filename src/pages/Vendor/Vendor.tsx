import './Vendor.scss'
import { useMemo } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import PageHeading from '../../components/PageHeading/PageHeading'
import VendorDetailSection from './VendorDetailSection'
import PageSections from '../../components/PageSections/PageSections'
import type { NewVendorPageData } from '../../types'

export default function Vendor(){
    const {vendors2} = useLoaderData()
    const vendorTag:string = useParams<string>().vendorTag ?? ''
    const vendor2:NewVendorPageData = useMemo(()=>{
        return vendors2[vendorTag]
    },[vendors2, vendorTag])

    return (
        <>
            <title>{`${vendor2.subtitle} | Cryptarch Guide`}</title>
            <PageHeading icon={vendor2.pageIcon} headline={vendor2.headline} subtitle={vendor2.subtitle} flavor={vendor2.flavorText} />
            <VendorDetailSection data={vendor2} />
            {"sections" in vendor2 && vendor2.sections.length > 0 &&
            <PageSections pageData={vendor2} />
            }
        </>
    )
}
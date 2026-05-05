import './VendorSections.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState, Fragment, type ReactElement } from 'react'
import type { DestinyInventoryItem, 
    CustomVendorPageData, 
    CustomVendorSectionRepPackage, 
    CustomVendorSectionEventBanner,
    CustomVendorSectionItemDisplay,
    CustomVendorSectionMulticolumnDisplay,
    CustomVendorSectionFieldTest
} from '../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'

import SectionFieldTest from './VendorSections/SectionFieldTest'
import SectionEventBanner from './VendorSections/SectionEventBanner'
import SectionMulticolumnDisplay from './VendorSections/SectionMulticolumnDisplay'
import SectionRepPackage from './VendorSections/SectionRepPackage'
import SectionItemDisplay from './VendorSections/SectionItemDisplay'

export default function VendorSections(){
    const {items, vendors, repPackages} = useLoaderData()
    const vendorTag:string = useParams<string>().vendorTag ?? ''
    const vendor:CustomVendorPageData = useMemo(()=>{
        return vendors[vendorTag]
    },[vendors, vendorTag])

    if(vendor.sections.length <= 0){
        return
    }

    const sectionElements = useMemo(()=> {
        const sections = vendor.sections

        return sections.map((section, index)=> {
            if(section.sectionType === "Field Test Weapons"){
                return <SectionFieldTest section={section} key={index}/>
            }
            if(section.sectionType === "Event Banner"){
                return <SectionEventBanner section={section} key={index}/>
            }
            if(section.sectionType === "Multicolumn Item Display"){
                return <SectionMulticolumnDisplay section={section} key={index} />
            }
            if(section.sectionType === "Reputation Package"){
                return <SectionRepPackage section={section} key={index} />
            }
            if(section.sectionType === "Item Display"){
                return <SectionItemDisplay section={section} key={index} />
            }

        })


    },[vendor, items, repPackages])

    return (
        <>
        {sectionElements}
        </>
    )
}
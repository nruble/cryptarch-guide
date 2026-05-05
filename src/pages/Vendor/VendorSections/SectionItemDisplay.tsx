import './SectionItemDisplay.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState, Fragment, type ReactElement } from 'react'
import type { DestinyInventoryItem, 
    CustomVendorPageData, 
    CustomVendorSectionRepPackage, 
    CustomVendorSectionEventBanner,
    CustomVendorSectionItemDisplay,
    CustomVendorSectionMulticolumnDisplay,
    CustomVendorSectionFieldTest
} from '../../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'

export default function SectionItemDisplay({section}:{section:CustomVendorSectionItemDisplay}){
    const {items} = useLoaderData()

    return (
        <section className='vendor-section item-display' id={section.sectionTitle.toLocaleLowerCase().replaceAll(' ', '-')}>
            <div className='vendor-section-heading'>
                <h2 className='vendor-section-heading-title'>{section.sectionTitle}</h2>
                {section.sectionDescription && <p className='vendor-section-heading-desc'>{section.sectionDescription}</p>}
            </div>
            <div className='vendor-section-itemdisplay-container'>
                {section.items &&
                    section.items.map((item, index) => {
                        const itemData:DestinyInventoryItem = items[item]
                        
                        return (
                            <Link to={`/item/${item}`} className='vendor-section-itemdisplay-item-wrapper' key={index}>
                                <img src={`/data/d1_icons${itemData.icon}`} className='vendor-section-itemdisplay-item-icon'/>
                                <div className='vendor-section-itemdisplay-item-text'>
                                    <h3>{itemData.itemName}</h3>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}
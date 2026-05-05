import './SectionMulticolumnDisplay.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState, Fragment, type ReactElement } from 'react'
import type { DestinyInventoryItem, 
    CustomVendorSectionMulticolumnDisplay,
} from '../../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import { Disclosure, DisclosurePanel, Button } from 'react-aria-components'
import { RiArrowDownSFill } from 'react-icons/ri'

type MultiColumn = { 
    "columnName": string, 
    "columnItems": string[] 
}

export default function SectionMulticolumnDisplay({section}:{section:CustomVendorSectionMulticolumnDisplay}){
    const {items} = useLoaderData()
    function columnItemElements(column:MultiColumn) {
        return column.columnItems.map((item, index)=>{
            const itemData:DestinyInventoryItem = items[item]
    
            return (
                <Link to={`/item/${item}`} className='multicol-item-wrapper' key={index}>
                    <img src={`/data/d1_icons${itemData.icon}`} alt="" className='multicol-item-icon' />
                    <div className='multicol-item-text'>
                        <h3>{itemData.itemName}</h3>
                    </div>
                </Link>
            )
        })
    }
    
    return (
        <section className='vendor-section multicol-display' id={section.sectionTitle.toLocaleLowerCase().replaceAll(' ', '-')}>
            <div className='vendor-section-heading'>
                <h2 className='vendor-section-heading-title'>{section.sectionTitle}</h2>
                {section.sectionDescription && <p className='vendor-section-heading-desc'>{section.sectionDescription}</p>}
            </div>
            <div className='multicol-column-container'>
                {section.columns &&
                    section.columns.map((column:MultiColumn, index) => 
                        <Disclosure 
                            className={'multicol-column'} 
                            key={index}
                            defaultExpanded={true}    
                        >
                            <Button 
                                slot="trigger" 
                                className={'multicol-column-btn'} 
                                id={`${section.sectionTitle.toLocaleLowerCase().replaceAll(' ','-')}-${column.columnName.toLocaleLowerCase().replaceAll(' ','-')}`}
                            >
                                <span className='multicol-column-btn-name'>{column.columnName}</span> <RiArrowDownSFill/>
                            </Button>
                            <DisclosurePanel className={'multicol-column-items-container'}>
                                {/* {foundryItemElements(foundry)} */}
                                {columnItemElements(column)}
                            </DisclosurePanel>
                        </Disclosure>
                    )
                }
            </div>
        </section>
    )
}
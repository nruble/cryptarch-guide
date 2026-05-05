import './SectionFieldTest.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState, Fragment, type ReactElement } from 'react'
import type { DestinyInventoryItem, 
    CustomVendorSectionFieldTest
} from '../../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import { Disclosure, DisclosurePanel, Button } from 'react-aria-components'
import { RiArrowDownSFill } from 'react-icons/ri'

type Foundry = {
    "foundryName": string,
    "foundryItems": string[],
    "descriptionTrim": string,
    "trailingTrim": string
}

export default function SectionFieldTest({section}:{section:CustomVendorSectionFieldTest}){
    const {items} = useLoaderData()
    
    function foundryItemElements(foundry:Foundry) {
        return foundry.foundryItems.map((item)=>{
            const itemData:DestinyInventoryItem = items[item]
    
            return (
                <Link to={`/item/${item}`} className='fieldtest-item-wrapper' key={itemData.itemHash}>
                    <img src={`/data/d1_icons${itemData.icon}`} alt="" className='fieldtest-item-icon' />
                    <div className='fieldtest-item-text'>
                        <h3>{itemData.itemName}</h3>
                        <p>{itemData.itemDescription?.replace(foundry.descriptionTrim, '').replace(foundry.trailingTrim, '.')}</p>
                    </div>
                </Link>
            )
        })
    }
    
    return (
    <section className='vendor-section field-test-weapons' id={section.sectionTitle.toLocaleLowerCase().replaceAll(' ', '-')}>
        <div className='vendor-section-heading'>
            <h2 className='vendor-section-heading-title'>{section.sectionTitle}</h2>
            {section.sectionDescription && <p className='vendor-section-heading-desc'>{section.sectionDescription}</p>}
        </div>
        <div className='field-test-foundries-container'>
            {section.foundries &&
                section.foundries.map((foundry, index) => 
                    <Disclosure className={'field-test-foundry'} key={index}>
                        <Button slot="trigger" className={'field-test-foundry-btn'}>
                            <span className='field-test-foundry-btn-name'>{foundry.foundryName}</span> <RiArrowDownSFill/>
                        </Button>
                        <DisclosurePanel className={'field-test-foundry-items-container'}>
                            {foundryItemElements(foundry)}
                        </DisclosurePanel>
                    </Disclosure>
                )
            }
        </div>
    </section>
    )
}
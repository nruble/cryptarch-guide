import './SectionRepPackage.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState, Fragment, type ReactElement } from 'react'
import type { DestinyInventoryItem, 
    CustomVendorPageData, 
    CustomVendorSectionRepPackage, 
    CustomVendorSectionEventBanner,
    CustomVendorSectionItemDisplay,
    CustomVendorSectionMulticolumnDisplay,
    CustomVendorSectionFieldTest,
    ReputationPackage,
    ReputationPackageBucket,
    ReputationPackageBucketOverride
} from '../../../types'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import { Disclosure, DisclosurePanel, DisclosureGroup, Button } from 'react-aria-components'
import { RiArrowDownSFill } from 'react-icons/ri'

type ReputationPackageList = string[]

export default function SectionRepPackage({section}:{section:CustomVendorSectionRepPackage}){
    const {items, repPackages} = useLoaderData()

    function repPackageBucketItems(repItems:string[]){
        return repItems.map((item:string)=>{
            const itemData:DestinyInventoryItem = items[item]
            return (
                <Link to={`/item/${item}`} className='rep-package-item'>
                    <img src={`/data/d1_icons${itemData.icon}`} alt="" className='rep-package-item-icon' />
                    <h2 className='rep-package-item-name'>{itemData.itemName}</h2>
                </Link>
            )
        })
    }

    function repPackageBucketItemsOverride(repItems:string[], overrideData:ReputationPackageBucketOverride[] = [] as ReputationPackageBucketOverride[]){
        const overrideItems:string[] = overrideData.map((item:ReputationPackageBucketOverride) => item.bucketItemHash)

        return repItems.map((item:string)=>{
            const itemData:DestinyInventoryItem = items[item]
            const hasOverride:boolean = overrideItems.includes(item)

            if(hasOverride){
                const thisOverrideItem:ReputationPackageBucketOverride = overrideData.find(over => over.bucketItemHash === item) ?? {} as ReputationPackageBucketOverride
                const isLinkOverride:boolean = thisOverrideItem.linkOverride
                const isLinkHash:boolean = thisOverrideItem.link.startsWith('#')
                const isNameOverride = thisOverrideItem.nameOverride

                if(isLinkHash && isLinkOverride){
                    return (
                        <a href={`${thisOverrideItem.link}`} className='rep-package-item'>
                            <img src={`/data/d1_icons${itemData.icon}`} alt="" className='rep-package-item-icon' />
                            <h2 className='rep-package-item-name'>{isNameOverride ? thisOverrideItem.name : itemData.itemName}</h2>
                        </a>
                    )
                }

                return (
                    <Link 
                        to={
                            isLinkOverride  
                            ? thisOverrideItem.link
                            : `/item/${item}`
                        } 
                        className='rep-package-item'
                    >
                        <img src={`/data/d1_icons${itemData.icon}`} alt="" className='rep-package-item-icon' />
                        <h2 className='rep-package-item-name'>{isNameOverride ? thisOverrideItem.name : itemData.itemName}</h2>
                    </Link>
                )
            }

            return (
                <Link to={`/item/${item}`} className='rep-package-item'>
                    <img src={`/data/d1_icons${itemData.icon}`} alt="" className='rep-package-item-icon' />
                    <h2 className='rep-package-item-name'>{itemData.itemName}</h2>
                </Link>
            )
        })
    }

    function repPackageBuckets(repBucketList:ReputationPackageBucket[]) {
        return repBucketList.map((bucket:ReputationPackageBucket) => {
            const bucketItemList = bucket.bucketItems

            return (
                <section className='rep-package-items-bucket'>
                    {bucket.bucketLabel != "" && 
                    <div className='rep-package-items-bucket-label'><span>{bucket.bucketLabel}</span></div>
                    }
                    <div className='rep-package-items'>
                        {repPackageBucketItemsOverride(bucketItemList, bucket.bucketOverrides)}
                    </div>
                </section>
            )
        })

    }

    function repPackageElements(reputationPacks:ReputationPackageList) {
        return reputationPacks.map((pack, index)=>{
            const repPackData:ReputationPackage = repPackages[pack]
    
            return (
                <Disclosure 
                    className={'rep-package-wrapper'}
                    key={index}
                    id={`rep-package-${index.toString()}`}
                    >
                    <Button 
                        slot="trigger" 
                        className={'rep-package-wrapper-btn'} 
                        id={`${section.sectionTitle.toLocaleLowerCase().replaceAll(' ','-')}-${pack.toLocaleLowerCase().replaceAll(' ','-')}`}
                        >
                        <img src={`/data/d1_icons${repPackData.icon}`} alt="" className='rep-package-wrapper-btn-icon'/>
                        <div className='rep-package-wrapper-btn-title'>
                            <span className='rep-package-wrapper-btn-name'>{repPackData.packageName}</span>
                            <span className='rep-package-wrapper-typeline'>Package</span> 
                        </div>
                        <RiArrowDownSFill/>
                    </Button>
                    <DisclosurePanel className={'rep-package-items-container'}>
                        {/* {foundryItemElements(foundry)} */}
                        {repPackageBuckets(repPackData.buckets)}
                    </DisclosurePanel>
                </Disclosure>
            )
        })
    }


    return (
        <section className='vendor-section rep-package' id={section.sectionTitle.toLocaleLowerCase().replaceAll(' ', '-')}>
            <div className='vendor-section-heading'>
                <h2 className='vendor-section-heading-title'>{section.sectionTitle}</h2>
                {section.sectionDescription && <p className='vendor-section-heading-desc'>{section.sectionDescription}</p>}
            </div>
            {section.reputationPackages &&
            <DisclosureGroup 
                className='rep-package-container'
                defaultExpandedKeys={[`rep-package-0`]}
            >
                {repPackageElements(section.reputationPackages)}
            </DisclosureGroup>
            }
        </section>
    )
}
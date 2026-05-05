import './SectionEventBanner.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo } from 'react'
import type { CustomVendorSectionEventBanner } from '../../../types'

export default function SectionEventBanner({section}:{section:CustomVendorSectionEventBanner}){
    const backgroundImgURL:string = useMemo(()=> {
        return `/data/d1_icons${section.backgroundPath}`
    },[section])

    return (
        <section 
            className='vendor-section event-banner' 
            id={section.sectionTitle.toLocaleLowerCase().replaceAll(' ', '-')}
            style={{
                background:`linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), linear-gradient(0deg, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0.0) 80%), url(${backgroundImgURL}) no-repeat center center / cover`
            }}
        >
            <div className='vendor-section-heading'>
                <h2 className='vendor-section-heading-title'>{section.sectionTitle}</h2>
                <p className='vendor-section-heading-desc'>{section.sectionDescription}</p>
            </div>
        </section>
    )
}
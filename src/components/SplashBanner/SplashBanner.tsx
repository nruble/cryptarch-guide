import './SplashBanner.scss'
import { useMemo } from 'react'
import type { SplashBannerType, SplashBannerSectionType } from '../../types'
import Markdown from 'react-markdown'


export default function SplashBanner({splashData}:{splashData:SplashBannerType}){
    const backgroundStyle = useMemo(()=> {
        if("bannerBackgroundUrl" in splashData && splashData.bannerBackgroundUrl !== ""){
            return {
                background:`linear-gradient(rgba(26,26,26,0.8), rgba(26,26,26,0.8)), url(${`/data/d1_icons${splashData.bannerBackgroundUrl}`}) no-repeat center center / cover, linear-gradient(0deg,#5B555B 0%, #8A7E82 90%)`
            }
        }
        return {
            background:`linear-gradient(0deg,#5B555B 0%, #8A7E82 90%)`
        }
    },[splashData])

    function splashSubSections(data:SplashBannerSectionType[]) {
        
        return data.map((section:SplashBannerSectionType, index)=>{
            
            return (
                <section className='splash-banner-section' key={index}>
                    {"sectionTitle" in section && section.sectionTitle != '' &&
                        <h2 className='splash-banner-section-title'>{section.sectionTitle}</h2>
                    }
                    {"textBlock" in section && section.textBlock != '' &&
                        <div className='splash-banner-section-textblock'>
                            <Markdown>{section.textBlock}</Markdown>
                        </div>
                    }
                </section>
            )
        })
    }
    
    return(
        <>
        <section 
            className="splash-banner" 
            style={backgroundStyle}
        >
            {"bannerSections" in splashData && splashData.bannerSections.length > 0 &&
                <div className='splash-banner-sections'>
                    {splashSubSections(splashData.bannerSections)}
                </div>
            }
        </section>
        </>
    )
}
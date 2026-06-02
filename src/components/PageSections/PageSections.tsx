import './PageSections.scss'
import Markdown from 'react-markdown'
import { useMemo } from 'react'
import type { RewardBoxPage, ActivityPage, ListPage, NewVendorPageData, IconSectionTitle, FieldTestItemDisplay, WideItemDisplay, DividedItemDisplay, SubjectDetailCard, ActivityCardType, FalseItemLinkType, ItemDisplaySetType} from '../../types'
import FalseItemLink from '../FalseItemLink/FalseItemLink'
import ItemDisplaySet from '../ItemDisplaySet/ItemDisplaySet'
import SimpleDisplayItem from '../SimpleDisplayItem/SimpleDisplayItem'
import FieldTestDisplayItem from '../FieldTestDisplayItem/FieldTestDisplayItem'
import BountyCard from '../BountyCard/BountyCard'
import SubjectCard from '../SubjectCard/SubjectCard'
import SummaryRewards from '../SummaryRewards/SummaryRewards'
import ActivityCard from '../ActivityCard/ActivityCard'
import SplashBanner from '../SplashBanner/SplashBanner'

export default function PageSections({pageData}:{pageData:Pick<ActivityPage, "sections"> | Pick<RewardBoxPage, "sections"> | Pick<ListPage, "sections"> | Pick<NewVendorPageData, "sections">}) {
    type PageSection = ActivityPage['sections'] | RewardBoxPage['sections'] | ListPage['sections'] | NewVendorPageData['sections']
    const sectionData:PageSection = useMemo(()=>{
      return pageData.sections
    },[pageData])
    function iconTitleElement(data:IconSectionTitle){
      return (
        <>
          <img src={`/data/d1_icons${data.icon}`} alt="" />
          <div className='icon-title-text'>
            <h3>{data.title}</h3>
            {"subtitle" in data && data.subtitle != '' &&    
            <p>{data.subtitle}</p>
            }
          </div>
        </>
      )
    }

    function subjectCardElements(data:SubjectDetailCard[]){
        return (
            data.map((cardObject:SubjectDetailCard, index)=>{
                return <SubjectCard data={cardObject} key={`${cardObject.title}-${index}`}/>
            })
        )
    }

    function bountyCardElements(data:string[]){
        return(
            data.map((itemHash:string)=>{
                return <BountyCard itemHash={itemHash} key={itemHash} />
            })
        )
    }

    function activityCardElements(data:ActivityCardType[]){
        return (
            data.map((cardObject:ActivityCardType, index) => {
                return <ActivityCard data={cardObject} key={`${cardObject.title}-${index}`} />
            })
        )
    }

    function wideItemDisplay(data:WideItemDisplay) {
        return (
            <>
            {"falseItemLinks" in data && data.falseItemLinks.length > 0 &&
                data.falseItemLinks.map((linkObject:FalseItemLinkType, index) => {
                    return <FalseItemLink data={linkObject} key={`${linkObject.labelText}-${index}`} />
                })
            }
            {"sets" in data && data.sets.length > 0 &&
                data.sets.map((setObject:ItemDisplaySetType, index) => {
                    return <ItemDisplaySet data={setObject} key={`${setObject.setLabel}-${index}`} />
                })
            }
            {"items" in data && data.items.length > 0 &&
                data.items.map((itemHash:string, index) => {
                    return <SimpleDisplayItem itemHash={itemHash} minimize={data.minimizeItemList} key={`${itemHash}-${index}`} />
                })
            }
            </>
        )
    }

    function dividedItemDisplay(data:DividedItemDisplay[], upperTitle:string = '') {
        return data.map((division:DividedItemDisplay, index) => {
          const idPart1:string = upperTitle === '' ? `division-${index}` : upperTitle.replaceAll(' ', '-').toLocaleLowerCase()
          const idPart2:string = division.divisionLabel.replaceAll(' ', '-').toLocaleLowerCase()
          const idString:string = `${idPart1}-${idPart2}`

          return (
            <section className='divided-item-section' key={index}>
              <h3 id={idString}>{division.divisionLabel}</h3>
              <div className={`divided-item-group${division.minimizeItemList ? ' minimized' : ''}`}>
                {wideItemDisplay(division)}
              </div>
            </section>
          )
        })
    }

    function fieldTestElements(data:FieldTestItemDisplay[]) {
      return data.map((division:FieldTestItemDisplay, index) => {
        const fieldSetItems = division.items
        const trim1 = division.descriptionTrim ?? ''
        return (
          <section className='divided-item-section' key={`${division.divisionLabel}-${index}`}>
            <h3>{division.divisionLabel}</h3>
            <div className={`divided-item-group`}>
              {
              fieldSetItems.map((itemHash:string) => {
                return <FieldTestDisplayItem itemHash={itemHash} trim1={trim1} key={itemHash} />
              })
              }
            </div>
          </section>
        )
      })
    }

    const sectionElements = sectionData.map((section, index) => {
        return (
            <section className='page-section' key={index}>
                {"splashBanner" in section && section.splashBanner &&
                  <SplashBanner splashData={section.splashBanner} />
                }
                {"sectionTitle" in section && section.sectionTitle != '' &&
                  <h2 className='page-section-title' id={section.sectionTitle.replaceAll(' ', '-').toLocaleLowerCase()}>{section.sectionTitle}</h2>
                }
                {"iconSectionTitle" in section && section.iconSectionTitle.icon != '' && section.iconSectionTitle.title != '' &&
                  <div className='page-section-icontitle'>
                    {iconTitleElement(section.iconSectionTitle)}
                  </div>
                }
                {"textBlock" in section && section.textBlock != '' &&
                  <div className='page-section-textblock'>
                      <Markdown>{section.textBlock}</Markdown>
                  </div>
                }
                {"fieldTestSpecial" in section && section.fieldTestSpecial.length > 0 &&
                  <div className='divided-item-container'>
                    {fieldTestElements(section.fieldTestSpecial)}
                  </div>
                }
                {"summaryRewards" in section &&
                    <ul className='page-summary-rewards'>
                        <SummaryRewards rewardData={section.summaryRewards}/>
                    </ul>
                }
                {"subjectCards" in section &&
                    <div className={`subject-cards-container${section.subjectCards.columnCount > 1 ? ` columncount-${section.subjectCards.columnCount}`:``}`}>
                        {subjectCardElements(section.subjectCards.subjectDetailCards)}
                    </div>
                }
                {"bountyCards" in section &&
                    <div className='bounty-cards-container'>
                        {bountyCardElements(section.bountyCards)}
                    </div>
                }
                {"activityCards" in section &&
                    <div className='activity-cards-container'>
                        {activityCardElements(section.activityCards)}
                    </div>
                }
                {"wideItemDisplay" in section &&
                    <div className={`wide-item-container${section.wideItemDisplay.minimizeItemList ? ' minimized' : ''}`}>
                        {wideItemDisplay(section.wideItemDisplay)}
                    </div>
                }
                {"dividedItemDisplay" in section &&
                    <div className='divided-item-container'>
                        {dividedItemDisplay(section.dividedItemDisplay, section.sectionTitle)}
                    </div>
                }
            </section>
        )
    })

    return(
        <section className="page-sections-container">
            {sectionElements}
        </section>
    )
}
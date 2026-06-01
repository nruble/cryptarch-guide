import './Home.scss'
import Markdown from 'react-markdown'
import HomeBanner from './HomeBanner'
import ActivityCard from '../../components/ActivityCard/ActivityCard'
import type { ActivityCardType } from '../../types'

export default function Home(){
    const acquisitionLinkData:ActivityCardType = {
        "backgroundUrl": "",
        "title": "Acquisition Source Index",
        "subtitle": "",
        "level": "",
        "lightLevel": "",
        "description": `Loot sources in the game, organized into categories and prioritizing contemporary rewards.`,
        "linkUrl": "/acquisition"
    }

    const databaseLinkData:ActivityCardType = {
        "backgroundUrl": "",
        "title": "Item Database",
        "subtitle": "",
        "level": "",
        "lightLevel": "",
        "description": `Like the Bungie Armory of old; sort of. A catalog of most items in the game with filters and a rudimentary name search.`,
        "linkUrl": "/items"
    }

    return (
        <>
        <title>{`Cryptarch Guide | Destiny Item & Reward Source Information`}</title>
        <HomeBanner />
        <section className='home-content-container'>
            <div className='home-content-main'>
                <section className='home-content-section'>
                    <h2>Using the Guide</h2>
                    <div className='home-content-section-body'>
                        <Markdown>{`This Guide is focused on gear you can acquire, and the sources you can acquire it from. It isn’t here to teach you how to play the game, or how to beat a raid encounter. But it may at times explain a topic or provide context as it pertains to acquiring loot. In the future some topics may be expanded upon, but several things (individual Strikes, Quests, Story Missions) were excluded as they wouldn’t add much value toward the Guide’s primary&nbsp;goal.\n\nFor now the site consists of 2&nbsp;sections:`}</Markdown>
                    </div>
                    <div className='home-link-cards'>
                        <ActivityCard data={acquisitionLinkData} />
                        <ActivityCard data={databaseLinkData} />
                    </div>
                </section>
            </div>
            <div className='home-content-sidebar'>
                <section className='home-content-section'>
                    <h2>On Items</h2>
                    <div className='home-content-section-body'>
                        <Markdown>{`Item pages for Weapons and Armor display information on their stat ranges and the possible perks in each&nbsp;node.\n\nStat ranges are based on the API definitions, however the data is too limited to show how perks directly alter stats.`}</Markdown>
                    </div>
                </section>
                <section className='home-content-section'>
                    <h2>Inventory?</h2>
                    <div className='home-content-section-body'>
                        <Markdown>{`This Guide does not pull from or communicate with Bungie’s API. It will not display information about your personal inventory. Nor will it display what Vendors are currently offering, or any other forms of live&nbsp;data.\n\nThere are better long-existing community tools to provide those functions and that information, so forgive me for not reinventing a rolling&nbsp;wheel.`}</Markdown>
                    </div>
                </section>
            </div>
        </section>
        </>
    )
}
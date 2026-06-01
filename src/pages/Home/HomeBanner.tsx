import './HomeBanner.scss'
import Markdown from 'react-markdown'

export default function HomeBanner(){
    return (
        <section className='home-banner-container'>
            <div className='home-banner-inner'>
                <h1 className='home-banner-headline'>
                    <span className='headline-bit-1'>Welcome to the </span>
                    <span className='headline-bit-2'>Cryptarch&rsquo;s Guide</span>
                    <span className='headline-bit-3'> to the (Inner) Sol System</span>
                </h1>
                <section className='home-banner-section'>
                    <h2>{`Items to Find,\nAnd Where to Find Them`}</h2>
                    <div className='home-banner-body'>
                        <Markdown>
                            {`Guardians from Freehold to the Caloris Spires all face the same questions:\n\nWhat the heck is that? Where does it come from? Is this gun any good? Where do I get that armor? What will I get if I do this activity? What should I be doing? What do those weird engrams even have in them? What will they give me for raising my reputation? Can I still get this anywhere? What other perks can this drop with? Can this even drop with other perks? What does Shaxx **mean** by “Unknown Rewards”?\n\n**Am I getting scammed by my local Cryptarch?** Maybe! But not this time, I promise. I’ve delved into a decade of archives to find as many answers for you as I was willing to, and reorganized them for you into this handy guide. So the next time you find yourself playing the 2014 video game DESTINY® on your PlayStation® or Xbox® console…remember your Guide, O reader mine.`}
                        </Markdown>
                    </div>
                </section>
            </div>
        </section>
    )
}
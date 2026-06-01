import './Acquisition.scss'
// import { useMediaQuery } from 'react-responsive'
// import { useMemo, useState } from 'react'
// import Markdown from 'react-markdown'
import PageHeading from '../../components/PageHeading/PageHeading'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'

export default function Acquisition(){
    return (
        <>
            <title>{`Acquisition Sources | Cryptarch Guide`}</title>
            <meta name='description' content='Test description' />
            <PageHeading headline={'Acquisition Source Index'} />
            <section className='acquisition-body'>
                <section className='source-section'>
                    <h2 className='source-section-title'>Activities</h2>

                    <div className='source-lists-group colcount-5'>
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/71be27b70f8627c144282b4a4335b63a.png' alt="" role="presentation" />
                                <h3>Raids</h3>
                            </dt>
                            <dd><Link to={'/activity/vault-of-glass-reprised'}>Vault of Glass <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/crotas-end-reprised'}>Crota&rsquo;s End <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/kings-fall-reprised'}>King&rsquo;s Fall <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/wrath-of-the-machine-featured'}>Wrath of the Machine <RiArrowRightSLine/></Link></dd>
                        </dl>
                    
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/c0bc407d3dde3a6c392556df2c8367c1.png' alt="" role="presentation" />
                                <h3>Vanguard Ops</h3>
                            </dt>
                            <dd><Link to={'/activity/nightfall'}>Weekly Nightfall Strike <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/siva-crisis-heroic-strike-playlist'}>SIVA Crisis Heroic Strikes <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/siva-crisis-strike-playlist'}>SIVA Crisis Strikes <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/taken-war-strike-playlist'}>Taken War Strikes <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/vanguard-legacy-strike-playlist'}>Vanguard Legacy Strikes <RiArrowRightSLine/></Link></dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/2bb3700444d713e49762ee42169c5846.png' alt="" role="presentation" />
                                <h3>Prison of Elders</h3>
                            </dt>
                            <dd><Link to={'/activity/challenge-of-the-elders'}>Challenge of the&nbsp;Elders <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/prison-of-elders-taken'}>Prison of Elders: Taken <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/prison-of-elders-skolass-revenge'}>Skolas&rsquo;s Revenge <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/prison-of-elders-weapon-core'}>Prison of Elders: Weapon&nbsp;Core <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/prison-of-elders-armor-core'}>Prison of Elders: Armor&nbsp;Core <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/prison-of-elders'}>Prison of Elders <RiArrowRightSLine/></Link></dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/6c6405b883e60be9254fa0412a30993f.png' alt="" role="presentation" />
                                <h3>World</h3>
                            </dt>
                            <dd><Link to={'/activity/weekly-story-playlist'}>Weekly Story Playlist <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/patrol-missions'}>Patrol Missions <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/public-events'}>Public Events <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/court-of-oryx'}>Court of Oryx <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/archons-forge'}>Archon&rsquo;s Forge <RiArrowRightSLine/></Link></dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/icon_pvp_b6b020f7fc23b66c5e885707e950a63b.png' alt="" role="presentation" />
                                <h3>Crucible</h3>
                            </dt>
                            <dd><Link to={'/activity/featured-crucible-mode'}>Featured Mode <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/activity/standard-crucible-modes'}>Standard Modes <RiArrowRightSLine/></Link></dd>
                        </dl>
                        
                    </div>
                </section>

                <section className='source-section'>
                    <h2 className='source-section-title'>Vendors</h2>

                    <div className='source-lists-group colcount-vendor'>
                        <dl className='source-list vend-vanguard'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/d77b37c857198255cfe3f6a99dbdf675.png' alt="" role="presentation" />
                                <h3>Vanguard</h3>
                            </dt>
                            <dd><Link to={'/vendor/vanguard-quartermaster'}><span className='emphasis'>Vanguard Quartermaster<span className='excess'> | Roni&nbsp;55&#8209;30</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/vanguard-hunter-mentor'}><span className='emphasis'>Hunter Mentor<span className='excess'> | Cayde&#8209;6</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/vanguard-titan-mentor'}><span className='emphasis'>Titan Mentor<span className='excess'> | Commander&nbsp;Zavala</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/vanguard-warlock-mentor'}><span className='emphasis'>Warlock Mentor<span className='excess'> | Ikora&nbsp;Rey</span></span> <RiArrowRightSLine/></Link></dd>
                        </dl>
                        
                        <dl className='source-list vend-crucible'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/a041aab57038733c7279a9b738bf634d.png' alt="" role="presentation" />
                                <h3>Crucible</h3>
                            </dt>
                            <dd><Link to={'/vendor/crucible-quartermaster'}><span className='emphasis'>Crucible Quartermaster<span className='excess'> | Arcite&nbsp;99&#8209;40</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/crucible-handler'}><span className='emphasis'>Crucible Handler<span className='excess'> | Lord&nbsp;Shaxx</span></span> <RiArrowRightSLine/></Link></dd>
                        </dl>

                        <dl className='source-list vend-factions'>
                            <dt className='source-list-heading'>
                                <div className='icon-set'>
                                    <img src='/data/d1_icons/common/destiny_content/icons/bec0e2e0a0c289f3788e05083e1117cd.png' alt="" role="presentation" />
                                    <img src='/data/d1_icons/common/destiny_content/icons/2433c4dc262b1fc9e419a7fa1c831173.png' alt="" role="presentation" />
                                    <img src='/data/d1_icons/common/destiny_content/icons/e403956ecef6e28a434ff086ab569787.png' alt="" role="presentation" />
                                </div>
                                <h3>City Factions</h3>
                            </dt>
                            <dd><Link to={'/vendor/dead-orbit'}><span className='emphasis'>Dead Orbit<span className='excess'> | Arach&nbsp;Jalaal</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/future-war-cult'}><span className='emphasis'>Future War Cult<span className='excess'> | Lakshmi&#8209;2</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/new-monarchy'}><span className='emphasis'>New Monarchy<span className='excess'> | Executor&nbsp;Hideo</span></span> <RiArrowRightSLine/></Link></dd>
                        </dl>

                        <dl className='source-list vend-tower'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4c9aaa6f13d40246cc722411a32b0135.png' alt="" role="presentation" />
                                <h3>Tower</h3>
                            </dt>
                            <dd><Link to={'/vendor/crotas-bane'}><span className='emphasis'>Crota’s Bane<span className='excess'> | Eris Morn</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/cryptarch-tower'}><span className='emphasis'>Cryptarch<span className='excess'> | Master Rahool</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/guardian-outfitter'}><span className='emphasis'>Guardian Outfitter<span className='excess'> | Eva Levante</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/gunsmith'}><span className='emphasis'>Gunsmith<span className='excess'> | Banshee-43</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/shipwright'}><span className='emphasis'>Shipwright<span className='excess'> | Amanda Holliday</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/the-speaker'}><span className='emphasis'>The Speaker</span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/agent-of-the-nine'}><span className='emphasis'>Xûr, Agent of the Nine</span> <RiArrowRightSLine/></Link></dd>
                        </dl>

                        <dl className='source-list vend-ever'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/b1dbb490f4ac7f758f55cc840e045138.png' alt="" role="presentation" />
                                <h3>Eververse</h3>
                            </dt>
                            <dd><Link to={'/vendor/eververse'}><span className='emphasis'>Eververse<span className='excess'> | Tess Everis</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/silver-dust-kiosk'}><span className='emphasis'>Silver Dust Kiosk</span> <RiArrowRightSLine/></Link></dd>
                        </dl>

                        <dl className='source-list vend-reef'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4c9aaa6f13d40246cc722411a32b0135.png' alt="" role="presentation" />
                                <h3>Reef</h3>
                            </dt>
                            <dd><Link to={'/vendor/cryptarch-reef'}><span className='emphasis'>Cryptarch<span className='excess'> | Master Ives</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/disciple-of-osiris'}><span className='emphasis'>Disciple of Osiris<span className='excess'> | Brother Vance</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/house-of-judgment'}><span className='emphasis'>House of Judgment<span className='excess'> | Variks</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/queens-wrath'}><span className='emphasis'>Queen’s Wrath<span className='excess'> | Petra Venj</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/agent-of-the-nine'}><span className='emphasis'>Xûr, Agent of the Nine</span> <RiArrowRightSLine/></Link></dd>
                        </dl>

                        <dl className='source-list vend-iron'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4c9aaa6f13d40246cc722411a32b0135.png' alt="" role="presentation" />
                                <h3>Iron Temple</h3>
                            </dt>
                            <dd><Link to={'/vendor/cryptarch-iron-temple'}><span className='emphasis'>Cryptarch<span className='excess'> | Tyra Karn</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/iron-lord'}><span className='emphasis'>Iron Lord<span className='excess'> | Lord Saladin</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/vendor/vanguard-scout'}><span className='emphasis'>Vanguard Scout<span className='excess'> | Shiro-4</span></span> <RiArrowRightSLine/></Link></dd>
                        </dl>
                    </div>
                </section>

                <section className='source-section half-span'>
                    <h2 className='source-section-title'>Engrams</h2>

                    <div className='source-lists-group colcount-2'>
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/img/destiny_content/items/engram_1-common.png' alt="" role="presentation" />
                                <h3>Standard</h3>
                            </dt>
                            <dd><Link to={'/list/exotic-engrams'}><span className='r-exotic'>Exotic Engrams</span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/legendary-engrams'}><span className='r-legend'>Legendary Engrams</span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/box/sublime-engrams'}><span className='r-legend'>Sublime Engrams</span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/legacy-exotic-engrams'}><span className='r-exotic'>Legacy Exotic Engrams</span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/legacy-legendary-engrams'}><span className='r-legend'>Legacy Legendary Engrams</span> <RiArrowRightSLine/></Link></dd>
                        </dl>
                        
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/img/destiny_content/items/silver.png' alt="" role="presentation" />
                                <h3>Silver Dust</h3>
                            </dt>
                            <dd><Link to={'/box/dusty-iron-engram'}><span className='r-legend'>Dusty Iron Engram<span className='excess'> | Iron&nbsp;Banner</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/box/triad-engram'}><span className='r-legend'>Triad Engram<span className='excess'> | Vanguard</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/box/arena-engram'}><span className='r-legend'>Arena Engram<span className='excess'> | Crucible</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/box/exodus-engram'}><span className='r-legend'>Exodus Engram<span className='excess'> | Dead&nbsp;Orbit</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/box/warpath-engram'}><span className='r-legend'>Warpath Engram<span className='excess'> | Future&nbsp;War&nbsp;Cult</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/box/unity-engram'}><span className='r-legend'>Unity Engram<span className='excess'> | New&nbsp;Monarchy</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/box/sterling-engram'}><span className='r-legend'>Sterling Engram<span className='excess'> | Spektar</span></span> <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/box/icy-engram'}><span className='r-legend'>Icy Engram<span className='excess'> | Dawning</span></span> <RiArrowRightSLine/></Link></dd>
                        </dl>
                    </div>
                </section>

                <section className='source-section half-span'>
                    <h2 className='source-section-title'>Pursuits</h2>

                    <div className='source-lists-group colcount-2'>
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/fcb0bd0bfd65bd5c7afb1389209f3e88.png' alt="" role="presentation" />
                                <h3>Bounties</h3>
                            </dt>
                            <dd><Link to={'/list/vanguard-bounties'}>Vanguard <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/vanguard-elite-bounties'}>Vanguard Elite <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/vanguard-weekly-elite-bounties'}>Vanguard Weekly&nbsp;Elite <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/crucible-bounties'}>Crucible <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/crucible-weekly-weapons-bounties'}>Crucible Weekly&nbsp;Weapons <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/crucible-weekly-mode-bounties'}>Crucible Weekly&nbsp;Modes <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/queens-wrath-bounties'}>Queen&rsquo;s Wrath <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/prison-of-elders-bounties'}>Prison of Elders <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/dreadnaught-bounties'}>Dreadnaught <RiArrowRightSLine/></Link></dd>
                            <dd><Link to={'/list/iron-lord-bounties'}>Iron&nbsp;Lord | Plaguelands <RiArrowRightSLine/></Link></dd>
                        </dl>
                        
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4b557a5b57680f1967d9357503740276.png' alt="" role="presentation" />
                                <h3>Quests</h3>
                            </dt>
                            <dd><Link to={'/list/weapon-quests'}>Weapon Quests <RiArrowRightSLine/></Link></dd>
                        </dl>

                        {/* <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/7421522eea7c8421881c581592d546db.png' alt="" role="presentation" />
                                <h3>Record Books</h3>
                            </dt>
                            <dd style={{textAlign:'center'}}>Not Yet Available</dd>
                        </dl> */}
                    </div>
                </section>

                {/* <section className='source-section'>
                    <h2 className='source-section-title'>Inaccessible Sources</h2>

                    <div className='source-lists-group colcount-4'>
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <div className='icon-set'>
                                    <img src='/data/d1_icons/img/theme/destiny/icons/node_queen.png' alt="" role="presentation" />
                                    <img src='/data/d1_icons/img/theme/destiny/icons/osiris_diamond.png' alt="" role="presentation" />
                                    <img src='/data/d1_icons/img/theme/destiny/icons/node_pvp_iron_banner.png' alt="" role="presentation" />
                                </div>
                                <h3>Past Events</h3>
                            </dt>
                            <dd style={{textAlign:'center'}}>Not Yet Available</dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/fcb0bd0bfd65bd5c7afb1389209f3e88.png' alt="" role="presentation" />
                                <h3>Past Bounties</h3>
                            </dt>
                            <dd style={{textAlign:'center'}}>Not Yet Available</dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/094e19cd531fd874381c881a7faba0ba.png' alt="" role="presentation" />
                                <h3>Past Records</h3>
                            </dt>
                            <dd><Markdown>{`*Moments of Triumph* and *SRL Record Book* cannot be obtained or progressed. However, owners can still claim earned rewards.\n\n*Competitive Spirit* SRL records can be progressed in Crucible Private Matches by playing the Sparrow Racing&nbsp;mode.`}</Markdown></dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4c9aaa6f13d40246cc722411a32b0135.png' alt="" role="presentation" />
                                <h3>Legacy Vendors</h3>
                            </dt>
                            <dd><Markdown>{`Reportedly, players on Xbox may be able to selectively delete *Rise of Iron* DLC license files from their console, reverting vendors to a pre&#8209;*Rise of Iron* state, offering rolls of Year 2 items for&nbsp;sale.\n\nAt this time I cannot confirm the efficacy or provide instructions.`}</Markdown></dd>
                        </dl>
                    </div>
                </section> */}
            </section>
        </>
    )
}
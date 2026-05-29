import './Acquisition.scss'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import Markdown from 'react-markdown'
import PageHeading from '../../components/PageHeading/PageHeading'
import { NavLink, Link } from 'react-router-dom'

export default function Acquisition(){
    return (
        <>
            <title>{`Acquisition Sources | Cryptarch Guide`}</title>
            <PageHeading headline={'Acquisition Source Index'} />
            <article className='acquisition-body'>
                <section className='source-section'>
                    <h2 className='source-section-title'>Activities</h2>

                    <div className='source-lists-group colcount-5'>
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/71be27b70f8627c144282b4a4335b63a.png' alt="" role="presentation" />
                                <h3>Raids</h3>
                            </dt>
                            <dd><Link to={'/activity/vault-of-glass-reprised'}>Vault of Glass</Link></dd>
                            <dd><Link to={'/activity/crotas-end-reprised'}>Crota&rsquo;s End</Link></dd>
                            <dd><Link to={'/activity/kings-fall-reprised'}>King&rsquo;s Fall</Link></dd>
                            <dd><Link to={'/activity/wrath-of-the-machine-featured'}>Wrath of the Machine</Link></dd>
                        </dl>
                    
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/c0bc407d3dde3a6c392556df2c8367c1.png' alt="" role="presentation" />
                                <h3>Vanguard Ops</h3>
                            </dt>
                            <dd><Link to={'/activity/nightfall'}>Weekly Nightfall Strike</Link></dd>
                            <dd><Link to={'/activity/siva-crisis-heroic-strike-playlist'}>SIVA Crisis Heroic Strikes</Link></dd>
                            <dd><Link to={'/activity/siva-crisis-strike-playlist'}>SIVA Crisis Strikes</Link></dd>
                            <dd><Link to={'/activity/taken-war-strike-playlist'}>Taken War Strikes</Link></dd>
                            <dd><Link to={'/activity/vanguard-legacy-strike-playlist'}>Vanguard Legacy Strikes</Link></dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/icon_pvp_b6b020f7fc23b66c5e885707e950a63b.png' alt="" role="presentation" />
                                <h3>Crucible</h3>
                            </dt>
                            <dd><Link to={'/activity/featured-crucible-mode'}>Featured Mode</Link></dd>
                            <dd><Link to={'/activity/standard-crucible-modes'}>Standard Modes</Link></dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/2bb3700444d713e49762ee42169c5846.png' alt="" role="presentation" />
                                <h3>Prison of Elders</h3>
                            </dt>
                            <dd><Link to={'/activity/challenge-of-the-elders'}>Challenge of the&nbsp;Elders</Link></dd>
                            <dd><Link to={'/activity/prison-of-elders'}>Prison of Elders: Taken</Link></dd>
                            <dd><Link to={'/activity/prison-of-elders-skolass-revenge'}>Skolas&rsquo;s Revenge</Link></dd>
                            <dd><Link to={'/activity/prison-of-elders-weapon-core'}>Prison of Elders: Weapon&nbsp;Core</Link></dd>
                            <dd><Link to={'/activity/prison-of-elders-armor-core'}>Prison of Elders: Armor&nbsp;Core</Link></dd>
                            <dd><Link to={'/activity/prison-of-elders'}>Prison of Elders</Link></dd>
                        </dl>

                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/6c6405b883e60be9254fa0412a30993f.png' alt="" role="presentation" />
                                <h3>World</h3>
                            </dt>
                            <dd><Link to={'/activity/weekly-story-playlist'}>Weekly Story Playlist</Link></dd>
                            <dd><Link to={'/activity/patrol-missions'}>Patrol Missions</Link></dd>
                            <dd><Link to={'/activity/public-events'}>Public Events</Link></dd>
                            <dd><Link to={'/activity/court-of-oryx'}>Court of Oryx</Link></dd>
                            <dd><Link to={'/activity/archons-forge'}>Archon&rsquo;s Forge</Link></dd>
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
                            <dd><Link to={'/vendor/vanguard-quartermaster'}><span className='emphasis'>Vanguard Quartermaster</span><span className='excess'> | Roni&nbsp;55&#8209;30</span></Link></dd>
                            <dd><Link to={'/vendor/vanguard-hunter-mentor'}><span className='emphasis'>Hunter Mentor</span><span className='excess'> | Cayde&#8209;6</span></Link></dd>
                            <dd><Link to={'/vendor/vanguard-titan-mentor'}><span className='emphasis'>Titan Mentor</span><span className='excess'> | Commander&nbsp;Zavala</span></Link></dd>
                            <dd><Link to={'/vendor/vanguard-warlock-mentor'}><span className='emphasis'>Warlock Mentor</span><span className='excess'> | Ikora&nbsp;Rey</span></Link></dd>
                        </dl>
                        
                        <dl className='source-list vend-crucible'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/a041aab57038733c7279a9b738bf634d.png' alt="" role="presentation" />
                                <h3>Crucible</h3>
                            </dt>
                            <dd><Link to={'/vendor/crucible-quartermaster'}><span className='emphasis'>Crucible Quartermaster</span><span className='excess'> | Arcite&nbsp;99&#8209;40</span></Link></dd>
                            <dd><Link to={'/vendor/crucible-handler'}><span className='emphasis'>Crucible Handler</span><span className='excess'> | Lord&nbsp;Shaxx</span></Link></dd>
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
                            <dd><Link to={'/vendor/dead-orbit'}><span className='emphasis'>Dead Orbit</span><span className='excess'> | Arach&nbsp;Jalaal</span></Link></dd>
                            <dd><Link to={'/vendor/future-war-cult'}><span className='emphasis'>Future War Cult</span><span className='excess'> | Lakshmi&#8209;2</span></Link></dd>
                            <dd><Link to={'/vendor/new-monarchy'}><span className='emphasis'>New Monarchy</span><span className='excess'> | Executor&nbsp;Hideo</span></Link></dd>
                        </dl>

                        <dl className='source-list vend-tower'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4c9aaa6f13d40246cc722411a32b0135.png' alt="" role="presentation" />
                                <h3>Tower</h3>
                            </dt>
                            <dd><Link to={'/vendor/crotas-bane'}><span className='emphasis'>Crota’s Bane</span><span className='excess'> | Eris Morn</span></Link></dd>
                            <dd><Link to={'/vendor/cryptarch-tower'}><span className='emphasis'>Cryptarch</span><span className='excess'> | Master Rahool</span></Link></dd>
                            <dd><Link to={'/vendor/guardian-outfitter'}><span className='emphasis'>Guardian Outfitter</span><span className='excess'> | Eva Levante</span></Link></dd>
                            <dd><Link to={'/vendor/gunsmith'}><span className='emphasis'>Gunsmith</span><span className='excess'> | Banshee-43</span></Link></dd>
                            <dd><Link to={'/vendor/shipwright'}><span className='emphasis'>Shipwright</span><span className='excess'> | Amanda Holliday</span></Link></dd>
                            <dd><Link to={'/vendor/the-speaker'}><span className='emphasis'>The Speaker</span></Link></dd>
                            <dd><Link to={'/vendor/agent-of-the-nine'}><span className='emphasis'>Xûr, Agent of the Nine</span></Link></dd>
                        </dl>

                        <dl className='source-list vend-ever'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/b1dbb490f4ac7f758f55cc840e045138.png' alt="" role="presentation" />
                                <h3>Eververse</h3>
                            </dt>
                            <dd><Link to={'/vendor/eververse'}><span className='emphasis'>Eververse</span><span className='excess'> | Tess Everis</span></Link></dd>
                            <dd><Link to={'/vendor/silver-dust-kiosk'}><span className='emphasis'>Silver Dust Kiosk</span></Link></dd>
                        </dl>

                        <dl className='source-list vend-reef'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4c9aaa6f13d40246cc722411a32b0135.png' alt="" role="presentation" />
                                <h3>Reef</h3>
                            </dt>
                            <dd><Link to={'/vendor/cryptarch-reef'}><span className='emphasis'>Cryptarch</span><span className='excess'> | Master Ives</span></Link></dd>
                            <dd><Link to={'/vendor/disciple-of-osiris'}><span className='emphasis'>Disciple of Osiris</span><span className='excess'> | Brother Vance</span></Link></dd>
                            <dd><Link to={'/vendor/house-of-judgment'}><span className='emphasis'>House of Judgment</span><span className='excess'> | Variks</span></Link></dd>
                            <dd><Link to={'/vendor/queens-wrath'}><span className='emphasis'>Queen’s Wrath</span><span className='excess'> | Petra Venj</span></Link></dd>
                            <dd><Link to={'/vendor/agent-of-the-nine'}><span className='emphasis'>Xûr, Agent of the Nine</span></Link></dd>
                        </dl>

                        <dl className='source-list vend-iron'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4c9aaa6f13d40246cc722411a32b0135.png' alt="" role="presentation" />
                                <h3>Iron Temple</h3>
                            </dt>
                            <dd><Link to={'/vendor/cryptarch-iron-temple'}><span className='emphasis'>Cryptarch</span><span className='excess'> | Tyra Karn</span></Link></dd>
                            <dd><Link to={'/vendor/iron-lord'}><span className='emphasis'>Iron Lord</span><span className='excess'> | Lord Saladin</span></Link></dd>
                            <dd><Link to={'/vendor/vanguard-scout'}><span className='emphasis'>Vanguard Scout</span><span className='excess'> | Shiro-4</span></Link></dd>
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
                            <dd><Link to={'/list/exotic-engrams'}><span className='r-exotic'>Exotic Engrams</span></Link></dd>
                            <dd><Link to={'/list/legendary-engrams'}><span className='r-legend'>Legendary Engrams</span></Link></dd>
                            <dd><Link to={'/box/sublime-engrams'}><span className='r-legend'>Sublime Engrams</span></Link></dd>
                            <dd><Link to={'/list/legacy-exotic-engrams'}><span className='r-exotic'>Legacy Exotic Engrams</span></Link></dd>
                            <dd><Link to={'/list/legacy-legendary-engrams'}><span className='r-legend'>Legacy Legendary Engrams</span></Link></dd>
                        </dl>
                        
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/img/destiny_content/items/silver.png' alt="" role="presentation" />
                                <h3>Silver Dust</h3>
                            </dt>
                            <dd><Link to={'/box/dusty-iron-engram'}><span className='r-legend'>Dusty Iron Engram</span><span className='excess'> | Iron&nbsp;Banner</span></Link></dd>
                            <dd><Link to={'/box/triad-engram'}><span className='r-legend'>Triad Engram</span><span className='excess'> | Vanguard</span></Link></dd>
                            <dd><Link to={'/box/arena-engram'}><span className='r-legend'>Arena Engram</span><span className='excess'> | Crucible</span></Link></dd>
                            <dd><Link to={'/box/exodus-engram'}><span className='r-legend'>Exodus Engram</span><span className='excess'> | Dead&nbsp;Orbit</span></Link></dd>
                            <dd><Link to={'/box/warpath-engram'}><span className='r-legend'>Warpath Engram</span><span className='excess'> | Future&nbsp;War&nbsp;Cult</span></Link></dd>
                            <dd><Link to={'/box/unity-engram'}><span className='r-legend'>Unity Engram</span><span className='excess'> | New&nbsp;Monarchy</span></Link></dd>
                            <dd><Link to={'/box/sterling-engram'}><span className='r-legend'>Sterling Engram</span><span className='excess'> | Spektar</span></Link></dd>
                            <dd><Link to={'/box/icy-engram'}><span className='r-legend'>Icy Engram</span><span className='excess'> | Dawning</span></Link></dd>
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
                            <dd><Link to={'/list/vanguard-bounties'}>Vanguard</Link></dd>
                            <dd><Link to={'/list/vanguard-elite-bounties'}>Vanguard Elite</Link></dd>
                            <dd><Link to={'/list/vanguard-weekly-elite-bounties'}>Vanguard Weekly&nbsp;Elite</Link></dd>
                            <dd><Link to={'/list/crucible-bounties'}>Crucible</Link></dd>
                            <dd><Link to={'/list/crucible-weekly-weapons-bounties'}>Crucible Weekly&nbsp;Weapons</Link></dd>
                            <dd><Link to={'/list/crucible-weekly-modes-bounties'}>Crucible Weekly&nbsp;Modes</Link></dd>
                            <dd><Link to={'/list/queens-wrath-bounties'}>Queen&rsquo;s Wrath</Link></dd>
                            <dd><Link to={'/list/prison-of-elders-bounties'}>Prison of Elders</Link></dd>
                            <dd><Link to={'/list/dreadnaught-bounties'}>Dreadnaught</Link></dd>
                            <dd><Link to={'/list/iron-lord-bounties'}>Iron&nbsp;Lord | Plaguelands</Link></dd>
                        </dl>
                        
                        <dl className='source-list'>
                            <dt className='source-list-heading'>
                                <img src='/data/d1_icons/common/destiny_content/icons/4b557a5b57680f1967d9357503740276.png' alt="" role="presentation" />
                                <h3>Quests</h3>
                            </dt>
                            <dd><Link to={'/list/weapon-quests'}>Weapon Quests</Link></dd>
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

                <section className='source-section'>
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
                </section>
            </article>
        </>
    )
}
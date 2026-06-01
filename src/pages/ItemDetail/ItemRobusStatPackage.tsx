import { Fragment } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem, statsObject} from '../../types'
import { WEAPON_STAT_ORDER, WEAPON_STAT_TEXTADDONS, ARMOR_STAT_ORDER, ARMOR_STAT_TEXTADDONS } from './subcomponents/StatDisplay/StatDescriptors'

interface statPackage {
    "statHash": number,
    "statName": string,
    "statDescription": string,
    "value": number,
    "minimum": number,
    "maximum": number
}
interface statAddons {"statName":string, "statDescription":string}

const elementMatches = ['', 'kinetic', 'arc', 'thermal', 'void']

export default function ItemRobustStatPackage() {
    const itemHash:string = useParams<string>().itemHash ?? ''
    const { items }  = useLoaderData()
    const itemData:DestinyInventoryItem = items[itemHash]
    const itemType:number = itemData.itemType ?? 0
    const statOrder:string[] = ( 
        itemType === 3 ? WEAPON_STAT_ORDER
        : itemType === 2 ? ARMOR_STAT_ORDER
        : []
    )
    const statAddonProvider:{[key:string]:statAddons} = ( 
        itemType === 3 ? WEAPON_STAT_TEXTADDONS
        : itemType === 2 ? ARMOR_STAT_TEXTADDONS
        : {}
    )
    const power:statsObject = (itemData.stats ?? {})['368428387'] ?? (itemData.stats ?? {})['3897883278'] ?? {} //368428387 = atk, 3897883278 = defense
    const light:statsObject = (itemData.stats ?? {})['2391494160'] ?? {}
    const element:string =  elementMatches[
        itemData.damageTypes ? itemData.damageTypes[0] : 0
    ]
    const hasValidStats:boolean = Object.keys(statAddonProvider).some((statId:string):boolean => Object.keys(itemData.stats ?? {}).includes(statId))
    const filteredStats:statsObject[] = Object.values(itemData.stats ?? {}).filter((stat:statsObject):boolean => {
        return Object.keys(statAddonProvider).some((statId:string):boolean => stat.statHash === parseInt(statId))
    })
    const rebuiltStats:statPackage[] = filteredStats.map((stat:statsObject):statPackage => {
        const statHashKey:string = stat.statHash.toString()
        return {...statAddonProvider[statHashKey], ...stat}
    })
    const sortedStats:statPackage[] = rebuiltStats.toSorted((a:statPackage, b:statPackage) => {
        return statOrder.indexOf(a.statName) - statOrder.indexOf(b.statName)
    })

    const statDescriptiveDisplayElements = () => {
        return sortedStats.map((stat) => {
            return (
                <Fragment key={stat.statHash}>
                <dt id={`stat-label-${stat.statName.replaceAll(" ", "-").toLocaleLowerCase()}`}>{stat.statName}</dt>
                    <dd className='stat-meter' 
                        role="meter"
                        aria-valuemax={stat.maximum}
                        aria-valuenow={stat.value}
                        aria-valuemin={stat.minimum}
                        aria-valuetext={
                            (stat.maximum === stat.value && stat.minimum === stat.value)
                            ? `Stat value of ${stat.value}.`
                            : `Stat range from ${
                                stat.minimum < stat.value 
                                ? stat.minimum 
                                : stat.value
                            } to ${
                                stat.maximum > stat.value 
                                ? stat.maximum 
                                : stat.value
                            }. Base value of ${stat.value}.`
                        }
                        aria-labelledby={`stat-label-${stat.statName.replaceAll(" ", "-").toLocaleLowerCase()}`}
                    >
                        {stat.maximum > stat.value && <span className="stat-meter-max" style={{'width':`${stat.maximum}%`}} aria-hidden></span>}
                        <span className="stat-meter-base" style={{'width':`${stat.value}%`}} aria-hidden></span>
                        {stat.minimum < stat.value && <span className="stat-meter-min" style={{'width':`${stat.minimum}%`}} aria-hidden></span>}
                    </dd>
                    <dd aria-describedby='stat-min-label' aria-hidden >{stat.minimum < stat.value && stat.minimum}</dd>
                    <dd className='stat-vertical-rule' aria-hidden></dd>
                    <dd aria-describedby='stat-base-label' aria-hidden>{stat.value}</dd>
                    <dd className='stat-vertical-rule' aria-hidden></dd>
                    <dd aria-describedby='stat-max-label' aria-hidden>{stat.maximum > stat.value && stat.maximum}</dd>
                </Fragment>
            )
        })
    }

    return (
        <>
            <div className="itemdetail-weapon-stat-priority">
                {/* power & light */}
                <dl className='itemdetail-weapon-maxatk'>
                    <dt>MAX {itemType === 3 ? `ATTACK` : itemType === 2 ? `DEFENSE` : ''}</dt>
                    <dd>
                        {element && <img src={`../../data/d1_icons/img/destiny_content/damage_types/${element}.png`} alt={`${element} damage`} className='itemdetail-weapon-element'/>}
                        {power.maximum}
                    </dd>
                </dl>
                <dl className='itemdetail-weapon-atk'>
                    <dt>BASE</dt>
                    <dd>{power.value}</dd>
                    <dt>MIN</dt>
                    <dd>{power.minimum}</dd>
                </dl>
                <dl className='itemdetail-weapon-light'>
                    <dt>LIGHT</dt>
                    <dd>{light.value}</dd>
                </dl>
            </div>
            {
            itemType === 2 && hasValidStats && (power.value <= 3 || power.maximum <= 3) && 
            <div className='itemdetail-statless-notice'>
                <h3>Notice:</h3>
                <p>Stats for this item are either made visible or rolled when Infused to a higher level. Tools like DIM cannot provide the underlying quality (% of total possible stat value) until then.</p>
            </div>
            }
            {/* mass stat table/display */}
            {
            hasValidStats &&
            <dl className="itemdetail-weapon-stat-detailed">
                <dd aria-hidden></dd>
                <dd aria-hidden></dd>
                <dd className="stat-numeric-label" id="stat-min-label" aria-label="Minimum value" aria-hidden>MIN</dd>
                <dd className='stat-vertical-rule' aria-hidden></dd>
                <dd className="stat-numeric-label" id="stat-base-label" aria-label="Base value" aria-hidden>&mdash;</dd>
                <dd className='stat-vertical-rule' aria-hidden></dd>
                <dd className="stat-numeric-label" id="stat-max-label" aria-label="Maximum value" aria-hidden>MAX</dd>

                {statDescriptiveDisplayElements()}
                
            </dl>
            }
        </>
    )
}
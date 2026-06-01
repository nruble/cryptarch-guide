import './StatDisplay.scss'
import { useMemo } from 'react'
import type { DestinyInventoryItem, statsObject, statPackage} from '../../../../types'
import { WEAPON_STAT_ORDER, WEAPON_STAT_TEXTADDONS, ARMOR_STAT_ORDER, ARMOR_STAT_TEXTADDONS, SPARROW_STAT_ORDER, SPARROW_STAT_TEXTADDONS } from './StatDescriptors'
import StatBar from './StatBar/StatBar'

interface statAddons {"statName":string, "statDescription":string}

const elementMatches = ['', 'kinetic', 'arc', 'thermal', 'void']
const attackStat = '368428387'
const defenseStat = '3897883278'
const speedStat = '1501155019'
//const lightStat = '2391494160'

export default function StatDisplay({itemData}:{itemData:DestinyInventoryItem}) {
  const itemType:number = itemData.itemType ?? 0
  const itemTypeName:string = itemData.itemTypeName
  const statOrder:string[] = ( 
    itemType === 3 ? WEAPON_STAT_ORDER
    : itemType === 2 ? ARMOR_STAT_ORDER
    : itemTypeName === 'Vehicle' ? SPARROW_STAT_ORDER
    : []
  )
  const statAddonProvider:{[key:string]:statAddons} = ( 
    itemType === 3 ? WEAPON_STAT_TEXTADDONS
    : itemType === 2 ? ARMOR_STAT_TEXTADDONS
    : itemTypeName === 'Vehicle' ? SPARROW_STAT_TEXTADDONS
    : {}
  )
  const itemStatsObject = itemData.stats
  const hasValidStats:boolean = Object.keys(statAddonProvider).some((statId:string):boolean => Object.keys(itemStatsObject).includes(statId))

  const processedStats:statPackage[] = useMemo(()=> {
    const filteredStats:statsObject[] = Object.values(itemStatsObject).filter((stat:statsObject):boolean => {
      return Object.keys(statAddonProvider).some((statId:string):boolean => stat.statHash === parseInt(statId))
    })
    const rebuiltStats:statPackage[] = filteredStats.map((stat:statsObject):statPackage => {
      const statHashKey:string = stat.statHash.toString()
      return {...statAddonProvider[statHashKey], ...stat}
    })
    const sortedStats:statPackage[] = rebuiltStats.toSorted((a:statPackage, b:statPackage) => {
      return statOrder.indexOf(a.statName) - statOrder.indexOf(b.statName)
    })
    return sortedStats
    
  },[itemStatsObject, statAddonProvider, statOrder])

  const itemDamageTypes = ("damageTypes" in itemData ? [...itemData.damageTypes] : [0])
  const elements = itemDamageTypes.map((damageType)=> elementMatches[damageType])

  const primaryStat:statsObject = useMemo(()=>{
    if(attackStat in itemStatsObject){
      return itemStatsObject[attackStat]
    }
    if(defenseStat in itemStatsObject){
      return itemStatsObject[defenseStat]
    }
    if(speedStat in itemStatsObject){
      return itemStatsObject[speedStat]
    }
    return {} as statsObject
  },[])

  function statBarSet() {
    return processedStats.map((stat:statPackage, index) => {
      return (
        <StatBar stat={stat} key={`${stat.statName}-${stat.statHash}-${index}`} />
      )
    })
  }

  function damageTypeImgElements() {
    if(elements.length <= 1 && elements[0] == ''){
      return
    }

    return (
      elements.map((damageType, index)=>{
        const iconUrl = `/data/d1_icons/img/destiny_content/damage_types/${damageType}.png`
        return (
          <img src={iconUrl} alt={`${damageType} damage`} className='itemdetail-weapon-element' key={`${damageType}-${index}`}/>

        )
      })
    )
  }
  
  function dustArmorNotice() {
    return(
      <div className='itemdetail-statless-notice'>
        <h3>Notice:</h3>
        <p>Stats for this item are either made visible or rolled when Infused to a higher level. Tools like DIM cannot provide the underlying quality (% of total possible stat value) until then.</p>
      </div>
    )
  }

  return (
    <section className='itemdetail-robust-stat-container'>
      {(itemType == 2 || itemType == 3) &&
        <div className="itemdetail-weapon-stat-priority">
          <dl className='itemdetail-weapon-maxatk'>
            <dt>MAX {
              attackStat in itemStatsObject 
            ? `ATTACK` 
            : defenseStat in itemStatsObject 
            ? `DEFENSE` 
            : speedStat in itemStatsObject
            ? `SPEED`
            : ''
            }</dt>
            <dd>
              {elements.length > 0 &&
                damageTypeImgElements()
              }
              {primaryStat.maximum}
            </dd>
          </dl>
            <dl className='itemdetail-weapon-atk'>
            <dt>BASE</dt>
            <dd>{primaryStat.value}</dd>
            <dt>MIN</dt>
            <dd>{primaryStat.minimum}</dd>
          </dl>
        </div>
      }
      {(itemTypeName == 'Vehicle') &&
        <div className="itemdetail-weapon-stat-priority">
          <dl className='itemdetail-weapon-maxatk'>
            <dt>{
              speedStat in itemStatsObject
            ? `SPEED`
            : ''
            }</dt>
            <dd>
              {elements.length > 0 &&
                damageTypeImgElements()
              }
              {primaryStat.maximum}
            </dd>
          </dl>
        </div>
      }

      {itemType === 2 && hasValidStats && (primaryStat.value <= 3 || primaryStat.maximum <= 3) && 
        dustArmorNotice()
      }

      {hasValidStats &&
      <dl className="stat-bar-container">
        <dd aria-hidden></dd>
        <dd aria-hidden></dd>
        <dd className="stat-numeric-label" id="stat-min-label" aria-label="Minimum value" aria-hidden>MIN</dd>
        <dd className='stat-vertical-rule' aria-hidden></dd>
        <dd className="stat-numeric-label" id="stat-base-label" aria-label="Base value" aria-hidden>&mdash;</dd>
        <dd className='stat-vertical-rule' aria-hidden></dd>
        <dd className="stat-numeric-label" id="stat-max-label" aria-label="Maximum value" aria-hidden>MAX</dd>
        {statBarSet()}
      </dl>
      }
    </section>
  )
}
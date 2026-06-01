import './ItemDetail.scss'
import { useMemo } from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import EmblemDisplay from './subcomponents/EmblemDisplay/EmblemDisplay'
import StatDisplay from './subcomponents/StatDisplay/StatDisplay'
import TalentGrid from './subcomponents/TalentGrid/TalentGrid'
import { useParams, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem} from '../../types'
type typelineObj = {
    [key:string] : string
}
const TYPELINE_CATEGORY_MATCHES = [2, 3, 4, 23, 22, 21]
const typelineAdditions:typelineObj = {
    '0': '',
    '23': " / Hunter",
    '22': " / Titan",
    '21': " / Warlock",
    '2': " / Primary",
    '3': " / Special",
    '4': " / Heavy"
}

export default function ItemDetail() {
  const itemHash:string = useParams<string>().itemHash ?? ''
  const { items }  = useLoaderData()
  const itemData:DestinyInventoryItem = items[itemHash]
  const typelineInsert:string = useMemo(()=>{
    const itemHashes:number[] = (itemData.itemCategoryHashes ?? []).map(Number)
    const confirmMatch:number[] = itemHashes.filter(cat => TYPELINE_CATEGORY_MATCHES.includes(cat))
    const newString:string = (
      confirmMatch.map(value => {
        return typelineAdditions[value]
      }).join('')
    )
    return (
      newString
    )
  },[itemData, TYPELINE_CATEGORY_MATCHES])

  const icon = itemData.icon ?? ''
  const headline = itemData.itemName ?? ''
  const subtitle = useMemo(()=>{
    return `${itemData.tierTypeName}${typelineInsert}${` / ${itemData.itemTypeName?.replace(/Warlock|Titan|Hunter|Armor/g, '')}`}`
  }, [itemData, typelineInsert])
  const flavortext = itemData.itemDescription ?? ''
  const itemType = itemData.itemType ?? 0
  

  return (
    <>
    <title>{`${headline} | Cryptarch Guide`}</title>
    <PageHeading icon={icon} headline={headline} subtitle={subtitle} flavor={flavortext} />
    {itemType == 14 &&
      <EmblemDisplay itemData={itemData} />
    }
    {('talentGridHash' in itemData || 'stats' in itemData) &&
      <section className="itemdetail-robust">
        {"stats" in itemData && (itemType == 2 || itemType == 3 || itemData.itemTypeName == 'Vehicle') &&
          <StatDisplay itemData={itemData} />
        }
        {"talentGridHash" in itemData && (itemType == 2 || itemType == 3 || itemData.itemTypeName == 'Vehicle') &&
          <TalentGrid itemTalentHash={itemData.talentGridHash} itemType={itemType}/>
        }
      </section>
    }
    </>
  )
}
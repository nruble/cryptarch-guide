import './RaidLootTable.scss'
import { useMemo, useState } from 'react'
import type { RaidLootTable } from '../../types'
// import FalseItemLink from '../FalseItemLink/FalseItemLink'
import ItemDisplaySet from '../ItemDisplaySet/ItemDisplaySet'
import SimpleDisplayItem from '../SimpleDisplayItem/SimpleDisplayItem'

export default function RaidLootTable({data}:{data:RaidLootTable}){
    const [charClass, setCharClass] = useState<'Hunter' | 'Titan' | 'Warlock'>('Hunter')
    const hunterItemElements = useMemo(() => {
        const hunterSet = <ItemDisplaySet data={data.hunter.armorSet} key={'harmorset'} />
        const hunterItems = data.hunter.items.map((item)=>{
            return <SimpleDisplayItem itemHash={item} minimize={false} key={item} />
        })

        return (
            [hunterSet, ...hunterItems]
        )
    }, [data.hunter])
    const titanItemElements = useMemo(() => {
        const titanSet = <ItemDisplaySet data={data.titan.armorSet} key={'tarmorset'} />
        const titanItems = data.titan.items.map((item)=>{
            return <SimpleDisplayItem itemHash={item} minimize={false} key={item} />
        })

        return (
            [titanSet, ...titanItems]
        )
    }, [data.titan])
    const warlockItemElements = useMemo(() => {
        const warlockSet = <ItemDisplaySet data={data.warlock.armorSet} key={'warmorset'} />
        const warlockItems = data.warlock.items.map((item)=>{
            return <SimpleDisplayItem itemHash={item} minimize={false} key={item} />
        })

        return (
            [warlockSet, ...warlockItems]
        )
    }, [data.warlock])
    const generalItemElements = useMemo(() => {
        return data.generalItems.map((item)=>{
            return <SimpleDisplayItem itemHash={item} minimize={false} key={item} />
        })
    }, [data.generalItems])

    return (
        <section className='activity-loot-table-section'>
            <div className='activity-loot-table-controls'>
                <hr/>
                <div className='class-button-group'>
                    <button onClick={() => setCharClass('Hunter')} aria-disabled={charClass == 'Hunter'}>
                        <div className='button-symbol-circle'>
                            <img src={`/data/d1_icons/img/destiny_content/classes/hunter.png`} alt="Hunter symbol" className='hunter-logo' />
                        </div>
                        Hunter
                    </button>
                    <button onClick={() => setCharClass('Titan')} aria-disabled={charClass == 'Titan'}>
                        <div className='button-symbol-circle'>
                            <img src={`/data/d1_icons/img/destiny_content/classes/titan.png`} alt="Titan symbol" className='titan-logo' />
                        </div>
                        Titan
                    </button>
                    <button onClick={() => setCharClass('Warlock')} aria-disabled={charClass == 'Warlock'}>
                        <div className='button-symbol-circle'>
                            <img src={`/data/d1_icons/img/destiny_content/classes/warlock.png`} alt="Warlock symbol" className='warlock-logo' />
                        </div>
                        Warlock
                    </button>
                </div>
                <hr/>
            </div>
            <div className='activity-loot-table-grid'>
                {charClass == 'Hunter' &&
                    hunterItemElements
                }
                {charClass == 'Titan' &&
                    titanItemElements
                }
                {charClass == 'Warlock' &&
                    warlockItemElements
                }
                {generalItemElements}
            </div>
        </section> 
    )
}
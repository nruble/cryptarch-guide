import { useMemo } from 'react'
import {useSearchParams} from 'react-router-dom'
import { RiArrowRightSLine, RiCheckFill } from 'react-icons/ri'
import { 
    Tree, TreeItem, TreeItemContent,
    Button, Checkbox
} from 'react-aria-components'
import type { Key, Selection } from 'react-aria-components'
import ItemsSubFilter from './ItemsSubFilter'
import ItemsSubSelector from './ItemsSubSelector'
import { 
    WEAPON_CLASS_OPTIONS, 
    WEAPON_TYPE_OPTIONS,
    ARMOR_CLASS_OPTIONS,
    ARMOR_TYPE_OPTIONS,
    INVENTORY_TYPE_OPTIONS,
    ITEM_RARITY_OPTIONS,
    ACTIVITY_SOURCE_OPTIONS,
    VENDOR_SOURCE_OPTIONS
} from './ItemsFilteringOptions.ts'
import './ItemsFiltering.scss'


const TOP_LEVEL_CATEGORIES = new Set(['1', '20', '52']) // 1 = weapons, 20 = armor, 52 = inventory

const CATEGORY_SUBPARAMS: Record<string, string[]> = {
    '1' : ['slot', 'type'],
    '20' : ['class', 'type'],
    '52' : ['type']
}

export default function ItemsFiltering() {
    const [searchParams, setSearchParams] = useSearchParams()

    const selectedKeys: Selection = new Set(searchParams.getAll('category'))
    const expandedKeys:Set<Key> = useMemo<Set<Key>>(()=>{
        return new Set(searchParams.getAll('category').filter(key => TOP_LEVEL_CATEGORIES.has(key)))
    },[searchParams, TOP_LEVEL_CATEGORIES])
    const clearSubParams = (next: URLSearchParams, categoryId: string) => {
        CATEGORY_SUBPARAMS[categoryId]?.forEach(param => next.delete(param))
    }

    const handleExpandedChange = (keys: Set<Key>) => {
        const newExpanded = [...keys].filter(key => !expandedKeys.has(key))
        const newCollapsed = [...expandedKeys].filter(key => !keys.has(key))

        setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            if (newExpanded.length > 0) {
                next.delete('category')
                TOP_LEVEL_CATEGORIES.forEach(key => clearSubParams(next, key))
                newExpanded.forEach(key => next.append('category', key as string))
            } else {
                newCollapsed.forEach(key => {
                    const remaining = next.getAll('category').filter(value => value !== key)
                    next.delete('category')
                    remaining.forEach(value => next.append('category', value))
                    clearSubParams(next, key as string)
                })
            }
            return next
        })
    }

    const handleSelectionChange = () => {}


    return (
        <menu className="resultslist-filter-menu">
            <section className='results-filter-section'>
                <h3 className='results-filter-section-heading'>Categories</h3>
                <Tree 
                    selectionMode='multiple' 
                    selectionBehavior='toggle' 
                    aria-label="Results Filters"
                    defaultExpandedKeys={new Set()}
                    expandedKeys={expandedKeys}
                    onExpandedChange={handleExpandedChange}
                    selectedKeys={selectedKeys}
                    onSelectionChange={handleSelectionChange}
                    >
                    <TreeItem id='1' textValue="Weapons" className='results-filter-item results-filter-item-expandable'>
                        <TreeItemContent>
                            <Checkbox slot='selection'/>
                            <Button slot="chevron" className='results-filter-tree-btn'>
                                <RiArrowRightSLine className='results-filter-tree-chevron'/>
                                <span className='results-filter-tree-btn-text'>Weapons</span>
                                <span className='results-filter-tree-checkbox'>
                                    <RiCheckFill />
                                </span>
                            </Button>
                        </TreeItemContent>
                        
                        <TreeItem id='weapon-subfilters' textValue="Weapon Filters" isDisabled>
                            <TreeItemContent>
                                <ItemsSubFilter legend="Weapon Class" isList={false} paramKey="slot" options={WEAPON_CLASS_OPTIONS} />
                                <ItemsSubFilter legend="Weapon Type" paramKey="type" options={WEAPON_TYPE_OPTIONS} />
                            </TreeItemContent>
                        </TreeItem>
                    </TreeItem>

                    <TreeItem id='20' textValue="Armor" className='results-filter-item results-filter-item-expandable'>
                        <TreeItemContent>
                            <Checkbox slot='selection'/>
                            <Button slot="chevron" className='results-filter-tree-btn'>
                                <RiArrowRightSLine className='results-filter-tree-chevron'/>
                                <span className='results-filter-tree-btn-text'>Armor</span>
                                <span className='results-filter-tree-checkbox'>
                                    <RiCheckFill />
                                </span>
                            </Button>
                        </TreeItemContent>
                        
                        <TreeItem id='armor-subfilters' textValue="Armor Filters" isDisabled>
                            <TreeItemContent>
                                <ItemsSubFilter legend="Armor Class" isList={false} paramKey="class" options={ARMOR_CLASS_OPTIONS} />
                                <ItemsSubFilter legend="Armor Type" paramKey="type" options={ARMOR_TYPE_OPTIONS} />
                            </TreeItemContent>
                        </TreeItem>
                    </TreeItem>

                    <TreeItem id='52' textValue="Inventory" className='results-filter-item results-filter-item-expandable'>
                        <TreeItemContent>
                            <Checkbox slot='selection'/>
                            <Button slot="chevron" className='results-filter-tree-btn'>
                                <RiArrowRightSLine className='results-filter-tree-chevron'/>
                                <span className='results-filter-tree-btn-text'>Inventory</span>
                                <span className='results-filter-tree-checkbox'>
                                    <RiCheckFill />
                                </span>
                            </Button>
                        </TreeItemContent>
                        
                        <TreeItem id='inventory-subfilters' textValue="Inventory Filters" isDisabled>
                            <TreeItemContent>
                                <ItemsSubFilter legend="Inventory Type" paramKey="type" options={INVENTORY_TYPE_OPTIONS} />
                            </TreeItemContent>
                        </TreeItem>
                    </TreeItem>
                </Tree>
            </section>

            <section className='results-filter-section'>
                <h3 className='results-filter-section-heading'>Filters</h3>
                <ItemsSubSelector legend="Rarity" paramKey="rarity" options={ITEM_RARITY_OPTIONS} />
                <ItemsSubSelector legend="Activity Sources" paramKey="asrc" options={ACTIVITY_SOURCE_OPTIONS} />
                <ItemsSubSelector legend="Vendor Sources" paramKey="vsrc" options={VENDOR_SOURCE_OPTIONS} />
            </section>    
        </menu>
    )
}
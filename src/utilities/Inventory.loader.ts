export async function inventoryLoader() {
    const response = await fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
    if (!response.ok) throw new Error('Failed to fetch Inventory Item Definitions')
    return response.json()
}

export async function fullItemDataLoader() {
    const [items, talentGrid] = await Promise.all([
        fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
            .then(res => res.json()),
        fetch('/data/d1_manifest/DestinyTalentGridDefinition.json')
            .then(res => res.json())
    ])
    return { items, talentGrid }
}

export async function vendorAndItemLoader() {
    const [items, vendors, repPackages] = await Promise.all([
        fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
            .then(res => res.json()),
        fetch('/data/vendorPageData.json')
            .then(res => res.json()),
        fetch('/data/vendorRepPackages.json')
            .then(res => res.json())
    ])
    return { items, vendors, repPackages }
}

export async function rewardBoxLoader() {
    const [items, boxes] = await Promise.all([
        fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
            .then(res => res.json()),
        fetch('/data/rewardBoxData.json')
            .then(res => res.json())
    ])
    return { items, boxes }
}

export async function listPageLoader() {
    const [items, lists, objectives] = await Promise.all([
        fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
            .then(res => res.json()),
        fetch('/data/listPageData.json')
            .then(res => res.json()),
        fetch('/data/d1_manifest/DestinyObjectiveDefinition.json')
            .then(res => res.json())
    ])
    return { items, lists, objectives }
}

export async function activityPageLoader() {
    const [items, activities] = await Promise.all([
        fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
            .then(res => res.json()),
        fetch('/data/activityPageData.json')
            .then(res => res.json())
    ])
    return { items, activities }
}
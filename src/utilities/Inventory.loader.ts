export async function inventoryLoader() {
    const response = await fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
    if (!response.ok) throw new Error('Failed to fetch Inventory Item Definitions')
    return response.json()
}

export async function fullItemDataLoader() {
    const [items, talentGrid, perks] = await Promise.all([
        fetch('/data/d1_manifest/DestinyInventoryItemDefinition.json')
            .then(res => res.json()),
        fetch('/data/d1_manifest/DestinyTalentGridDefinition.json')
            .then(res => res.json()),
        fetch('/data/d1_manifest/DestinySandboxPerkDefinition.json')
            .then(res => res.json()),
    ])
    return { items, talentGrid, perks }
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
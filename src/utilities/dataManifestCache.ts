let itemsPromise: Promise<Record<string, any>> | null = null
let talentGridPromise: Promise<Record<string, any>> | null = null

export function getItems() {
    if (!itemsPromise) {
        itemsPromise = fetch('/data/d1_manifest/DestinyInventoryItemDefinition.clean.json')
            .then((res) => {
              if (!res.ok) {throw new Error('Failed to fetch Inventory Item Definitions')}
              return res.json()
            })
    }
    return itemsPromise
}

export function getTalentGrid() {
    if (!talentGridPromise) {
        talentGridPromise = fetch('/data/d1_manifest/DestinyTalentGridDefinition.min.json')
            .then(res => res.json())
    }
    return talentGridPromise
}
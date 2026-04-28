export type statsObject = {
    "statHash": number,
    "value": number,
    "minimum": number,
    "maximum": number
}

interface sourceObject {
    "expansionIndex": number,
    "level": number,
    "minQuality": number,
    "maxQuality": number,
    "minLevelRequired": number,
    "maxLevelRequired": number,
    "exclusivity": number,
    "computedStats": {
        [key:string]: statsObject 
    },
    "sourceHashes": number[]
}

interface dyeObject {
    "channelHash": number,
    "dyeHash": number
}

interface arrangement {
    "classHash": number,
    "gearArtArrangementIndex": number
}

interface customDyeStep {
    "stepOperator": number,
    "flagHash": number,
    "valueHash": number,
    "value": number
}

interface animation {
    "animName": string,
    "animIdentifier": string,
    "path": string
}

interface derivedItem {
    "itemHash": number,
    "vendorItemIndex": number
}
interface derivedItemCategories {
    "categoryDescription": string,
    "items": derivedItem[],
    "categoryHash": number
}

export type DestinyInventoryItem = {
    "itemHash": number,
    "itemName"?: string,
    "itemDescription"?: string,
    "icon"?: string,
    "hasIcon"?: boolean,
    "secondaryIcon"?: string,
    "displaySource"?: string,
    "actionName"?: string,
    "actionDescription"?: string,
    "hasAction"?: boolean,
    "deleteOnAction"?: boolean,
    "tierTypeName"?: string,
    "tierType"?: number,
    "itemTypeName"?: string,
    "bucketTypeHash"?: number,
    "primaryBaseStatHash"?: number,
    "stats"?: {
        [key: string]: statsObject
    },
    "perkHashes"?: number[],
    "specialItemType"?: number,
    "talentGridHash"?: number,
    "equippingBlock"?: {
        "weaponSandboxPatternIndex": number,
        "gearArtArrangementIndex": number,
        "defaultDyes": dyeObject[],
        "lockedDyes": dyeObject[],
        "customDyes": dyeObject[],
        "customDyeExpression"?: {
            "steps"?: customDyeStep[]
        },
        "weaponPatternHash": number,
        "arrangements"?: arrangement[],
        "equipmentSlotHash": number
    },
    "hasGeometry"?: boolean,
    "statGroupHash"?: number,
    "itemLevels"?: number[],
    "qualityLevel"?: number,
    "equippable"?: boolean,
    "instanced"?: boolean,
    "rewardItemHash"?: number,
    "values"?: {
        [key: string]: number
    },
    "itemType"?: number,
    "itemSubType"?: number,
    "classType"?: number,
    "sources"?: sourceObject[],
    "itemCategoryHashes"?: number[],
    "sourceHashes"?: number[],
    "nonTransferrable"?: boolean,
    "exclusive"?: number,
    "maxStackSize"?: number,
    "itemIndex"?: number,
    "setItemHashes"?: number[],
    "tooltipStyle"?: string,
    "questlineItemHash"?: number,
    "needsFullCompletion"?: boolean,
    "objectiveHashes"?: number[],
    "derivedItemCategories"?: derivedItemCategories[],
    "animations"?: animation[],
    "allowActions"?: boolean,
    "questTrackingUnlockValueHash"?: number,
    "bountyResetUnlockHash"?: number,
    "uniquenessHash"?: number,
    "derivedItemVendorHash"?: number,
    "showActiveNodesInTooltip"?: boolean,
    "damageTypes"?: (1 | 2 | 3 | 4)[],
    "hash"?: number,
    "index"?: number,
    "redacted"?: boolean
}
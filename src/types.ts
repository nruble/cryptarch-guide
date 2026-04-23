interface statsObject {
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

export type DestinyInventoryItem = {
    "itemHash": number,
    "itemName": string,
    "itemDescription": string,
    "icon": string,
    "hasIcon": boolean,
    "secondaryIcon": string,
    "actionName": string,
    "hasAction": boolean,
    "deleteOnAction": boolean,
    "tierTypeName": string,
    "tierType": number,
    "itemTypeName": string,
    "bucketTypeHash": number,
    "primaryBaseStatHash": number,
    "stats": {
        [key: string]: statsObject
    },
    "perkHashes": [],
    "specialItemType": number,
    "talentGridHash": number,
    "equippingBlock": {
        "weaponSandboxPatternIndex": number,
        "gearArtArrangementIndex": number,
        "defaultDyes": dyeObject[],
        "lockedDyes": dyeObject[],
        "customDyes": dyeObject[],
        "customDyeExpression": {
            "steps": [
                {
                    "stepOperator": number,
                    "flagHash": number,
                    "valueHash": number,
                    "value": number
                }
            ]
        },
        "weaponPatternHash": number,
        "arrangements": [
            {
                "classHash": number,
                "gearArtArrangementIndex": number
            }
        ],
        "equipmentSlotHash": number
    },
    "hasGeometry": boolean,
    "statGroupHash": number,
    "itemLevels": [
        number
    ],
    "qualityLevel": number,
    "equippable": boolean,
    "instanced": boolean,
    "rewardItemHash": number,
    "values": {},
    "itemType": number,
    "itemSubType": number,
    "classType": number,
    "sources": sourceObject[],
    "itemCategoryHashes": number[],
    "sourceHashes": number[],
    "nonTransferrable": boolean,
    "exclusive": number,
    "maxStackSize": number,
    "itemIndex": number,
    "setItemHashes": [],
    "tooltipStyle": string,
    "questlineItemHash": number,
    "needsFullCompletion": boolean,
    "objectiveHashes": [],
    "allowActions": boolean,
    "questTrackingUnlockValueHash": number,
    "bountyResetUnlockHash": number,
    "uniquenessHash": number,
    "showActiveNodesInTooltip": boolean,
    "hash": number,
    "index": number,
    "redacted": boolean
}
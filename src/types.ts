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

export type talentGridNodeStep = {
    "stepIndex": number,
    "nodeStepHash": number,
    "nodeStepName": string,
    "nodeStepDescription": string,
    "interactionDescription": string,
    "icon": string,
    "damageType": number,
    "damageTypeHash": number,
    "activationRequirement": {
        "gridLevel": number,
        "materialRequirementHashes": number[],
        "exclusiveSetRequiredHash": number
    },
    "canActivateNextStep": boolean,
    "nextStepIndex": number,
    "isNextStepRandom": boolean,
    "perkHashes": number[],
    "startProgressionBarAtProgress": number,
    "statHashes": number[],
    "affectsQuality": boolean,
    "trueStepIndex": number,
    "truePropertyIndex": number,
    "socketReplacements": {"socketTypeHash": number, "plugItemHash": number}[],
    "affectsLevel": boolean
}

export type talentGridNode = {
    "nodeIndex": number,
    "nodeHash": number,
    "row": number,
    "column": number,
    "prerequisiteNodeIndexes": number[],
    "binaryPairNodeIndex": number,
    "autoUnlocks": boolean,
    "lastStepRepeats": boolean,
    "isRandom": boolean,
    "isRandomRepurchasable": boolean,
    "steps": talentGridNodeStep[],
    "exlusiveWithNodes": number[],
    "randomStartProgressionBarAtProgression": number,
    "originalNodeHash": number,
    "talentNodeTypes": number,
    "exclusiveSetHash": number,
    "isRealStepSelectionRandom": boolean
}

export type DestinyTalentGrid = {
		"gridHash": number,
		"maxGridLevel": number,
		"gridLevelPerColumn": number,
		"progressionHash": number,
		"nodes": talentGridNode[],
		"calcMaxGridLevel": number,
		"calcProgressToMaxLevel": number,
		"exclusiveSets": {"nodeIndexes": number[]}[],
		"independentNodeIndexes": number[],
		"maximumRandomMaterialRequirements": number,
		"hash": number,
		"index": number,
		"redacted": boolean
	}

export type CustomVendorPageSaleItem = {
        "itemHash": string,
        "showName":boolean,
        "nameOverride": boolean,
        "name": string,
        "linkOverride": boolean,
        "link": string
    }

export type CustomVendorPageSale = {
    "saleSection": number,
    "saleTitle": string,
    "saleItems": CustomVendorPageSaleItem[],
    "saleFootnote": string
    }

export type CustomVendorSpecialInfo = {
    "icon"?: string,
    "title": string,
    "description": string,
    "items": CustomVendorPageSaleItem[]
}

export type CustomVendorPageData = {
    "vendorName": string,
    "icon": string,
    "vendorTitle": string,
    "vendorDescription": string,
    "repFaction"?: {
        "repName": string,
        "repIcon": string,
        "repDescription": string,
        "rankLevels"?: { "label": string, "cost": string }[]
    },
    "secondRepFaction"?: {
        "repName": string,
        "repIcon": string,
        "repDescription": string
    },
    "specialInformation"?: CustomVendorSpecialInfo,
    "sales"?: CustomVendorPageSale[],
    "sections": (CustomVendorSectionRepPackage 
        | CustomVendorSectionEventBanner 
        | CustomVendorSectionItemDisplay
        | CustomVendorSectionMulticolumnDisplay
        | CustomVendorSectionFieldTest)[]
}

export type CustomVendorSectionRepPackage = {
        "sectionTitle": string,
        "sectionQuote"?: string,
        "sectionDescription": string,
        "sectionType": string,
        "reputationPackages"?: string[]
    }

export type CustomVendorSectionEventBanner = {
        "sectionTitle":string,
        "sectionDescription": string,
        "backgroundPath"?: string,
        "sectionType": string
    }

export type CustomVendorSectionItemDisplay = {
        "sectionTitle":string,
        "sectionDescription": string,
        "sectionType": string,
        "items"?: string[]
    }

export type CustomVendorSectionMulticolumnDisplay = {
        "sectionTitle":string,
        "sectionDescription": string,
        "sectionType": string,
        "columns"?: { "columnName": string, "columnItems": string[] }[]
    }

export type CustomVendorSectionFieldTest = {
    "sectionTitle": string,
    "sectionDescription": string,
    "sectionType": string,
    "foundries"?: 
        {
            "foundryName": string,
            "foundryItems": string[],
            "descriptionTrim": string,
            "trailingTrim": string
        }[]
}

export type ReputationPackageBucketOverride = {
        "bucketItemHash": string,
        "linkOverride": boolean,
        "link": string,
        "nameOverride": boolean,
        "name": string
    }

export type ReputationPackageBucket = {
        "bucketLabel": string,
        "bucketItems": string[],
        "bucketOverrides"?: ReputationPackageBucketOverride[]
    }

export type ReputationPackage = {
    "icon": string,
    "packageName": string,
    "buckets": ReputationPackageBucket[]
}

export type RewardBoxPage = {
    "pageIcon": string,
    "headline": string,
    "subtitle": string,
    "flavorText": string,
    "sections": {
        "sectionTitle": string,
        "textBlock": string,
        "wideItemDisplay": {
            "falseItemLinks": {
                "iconItemHash": string,
                "iconUrl": string,
                "labelText": string,
                "labelSubtitle": string,
                "linkUrl": string
            }[],
            "sets": {
                "setLabel": string,
                "setSubtitle": string,
                "setItems": string[]
            }[],
            "items": string[]
        },
        "dividedItemDisplay": {
            "divisionLabel": string,
            "falseItemLinks": {
                "iconItemHash": string,
                "iconUrl": string,
                "labelText": string,
                "labelSubtitle": string,
                "linkUrl": string
            }[],
            "sets": {
                "setLabel": string,
                "setSubtitle": string,
                "setItems": string[]
            }[],
            "items": string[]
        }[]
    }[]
}

export type ListPage = {
    "pageIcon": string,
    "headline": string,
    "subtitle": string,
    "flavorText": string,
    "sections": {
        "sectionTitle": string,
        "textBlock": string,
        "summaryRewards": {
                "iconUrl": string,
                "rewardText": string
            }[],
        "subjectCards": {
            "columnCount": 3,
            "subjectDetailCards": {
                "iconUrl": string,
                "title": string,
                "subtitle": string,
                "description": string,
                "quote": string,
                "summaryRewards": {
                        "iconUrl": string,
                        "rewardText": string
                    }[]
            }[]
        },
        "bountyCards": string[],
        "activityCards": {
                "backgroundUrl": string,
                "title": string,
                "subtitle": string,
                "level": string,
                "lightLevel": string,
                "description": string,
                "linkUrl": string
            }[],
        "wideItemDisplay": {
            "falseItemLinks": {
                "iconItemHash": string,
                "iconUrl": string,
                "labelText": string,
                "labelSubtitle": string,
                "linkUrl": string
            }[],
            "sets": {
                "setLabel": string,
                "setSubtitle": string,
                "setItems": string[]
            }[],
            "items": string[]
        },
        "dividedItemDisplay": {
            "divisionLabel": string,
            "falseItemLinks": {
                "iconItemHash": string,
                "iconUrl": string,
                "labelText": string,
                "labelSubtitle": string,
                "linkUrl": string
            }[],
            "sets": {
                "setLabel": string,
                "setSubtitle": string,
                "setItems": string[]
            }[],
            "items": string[]
        }[]
    }[]
}
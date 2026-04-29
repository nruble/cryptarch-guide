import type { talentGridNode } from "../types"

export function filterNodes(nodes:talentGridNode[]) {
    // Filtering node data. Talent grid consists of nodes located at row/column coordiantes. Steps are the "perks". Multiple steps mean it randomly rolls with 1 of those.
    const excludedIndexes = new Set()

    for (const node of nodes) {
        if (shouldExcludeDirectly(node)) {
            excludedIndexes.add(node.nodeIndex)
        }
    }

    for (const node of nodes) {
        if (!excludedIndexes.has(node.nodeIndex)) {
            const exclusiveWith = node.exlusiveWithNodes
            if (exclusiveWith.length > 0 && exclusiveWith.every(i => excludedIndexes.has(i))) {
                excludedIndexes.add(node.nodeIndex)
            }
        }
    }

    return nodes.filter(n => !excludedIndexes.has(n.nodeIndex))
}

function shouldExcludeDirectly(node:talentGridNode) {
    // May need to revise any or all of these if a node that should display is being cut out.
    if (node.lastStepRepeats && node.isRandomRepurchasable) return true // Should remove Infuse, Twist Fate, Deactivate Chroma
    if (node.row < 0 || node.column < 0) return true // Removes any off-grid nodes (hidden stat rolls, placeholders) at negative coordinates
    if (node.steps.some(step => step.socketReplacements?.length > 0)) return true // Should remove the Ornament applied/placeholder nodes

    // Ornament purchase nodes (no perk effect, no stat modification)
    // Excludes node if steps lack perkHashes or statHashes, unless the name matches one specified.
    // May want to reassess keeping the Upgrade nodes. Like having them for full information, but they bloat the grid badly for spacing on old weapons
    if (node.steps.every(step =>
        step.perkHashes.length === 0 
        && step.statHashes.length === 0 
        && step.nodeStepName !== "Upgrade Damage" 
        && step.nodeStepName !== "Upgrade Defense"
    )) return true

    // Should remove weapon damage type nodes from older weapons. Clunky, but finite list of possibilities so it's probably okay
    if (node.steps.some(step =>
        step.nodeStepName === "Solar Damage" 
        || step.nodeStepName === "Void Damage" 
        || step.nodeStepName === "Arc Damage" 
        || step.nodeStepName === "Kinetic Damage"
    )) return true

    return false
}

export function gatherOrnamentItemHashes(nodes:talentGridNode[]):number[] {
    const gatheredOrnaments = new Set()

    for (const node of nodes) {
        if (identifyOrnament(node)) {
            gatheredOrnaments.add(node.steps[0].socketReplacements[0].plugItemHash)
        }
    }
    return [...gatheredOrnaments] as number[]
}

function identifyOrnament(node:talentGridNode) {
    if (node.row < 0 || node.column < 0) return false
    if (node.steps.some(step => step.socketReplacements?.length > 0)) return true
    return false
}

export function hasChroma(nodes:talentGridNode[]):boolean {
    for (const node of nodes) {
        if (checkForChroma(node)) {
            return true
        }
    }
    return false
}

function checkForChroma(node:talentGridNode) {
    if (node.row < 0 || node.column < 0) return false
    if (node.steps.some(step =>
        step.nodeStepName === "Deactivate Chroma" 
    )) return true
    return false
}
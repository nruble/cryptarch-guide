import { getItems, getTalentGrid } from './dataManifestCache'
import type { LoaderFunctionArgs } from "react-router-dom"

export async function inventoryLoader() {
    const items = await getItems()
    //if (!response.ok) throw new Error('Failed to fetch Inventory Item Definitions')
    return {items}
}

export async function fullItemDataLoader({params}: LoaderFunctionArgs) {
    const { itemHash } = params
    const items = await getItems()

    if (!itemHash || !Object.hasOwn(items, itemHash)) {
      throw new Response('Item not found', { status: 404 })
    }
    const talentGrid = await getTalentGrid()

    return { items, talentGrid }
}

export async function vendorAndItemLoader({params}: LoaderFunctionArgs) {
    const { vendorTag } = params
    const vendors2 = await fetch('/data/newVendorPageData.json')
      .then(res => res.json())
    if (!vendorTag || !Object.hasOwn(vendors2, vendorTag)) {
      throw new Response('Vendor not found', { status: 404 })
    }

    const items = await getItems()
    return { items, vendors2 }
}

export async function rewardBoxLoader({params}: LoaderFunctionArgs) {
    const { boxTag } = params
    const boxes = await fetch('/data/rewardBoxData.json')
      .then(res => res.json())
    if (!boxTag || !Object.hasOwn(boxes, boxTag)) {
      throw new Response('Page not found', { status: 404 })
    }

    const items = await getItems()
    return { items, boxes }
}

export async function listPageLoader({params}: LoaderFunctionArgs) {
    const { listTag } = params
    const lists = await fetch('/data/listPageData.json')
      .then(res => res.json())
    if (!listTag || !Object.hasOwn(lists, listTag)) {
      throw new Response('Page not found', { status: 404 })
    }
    const [items, objectives] = await Promise.all([
        getItems(),
        fetch('/data/d1_manifest/DestinyObjectiveDefinition.json')
            .then(res => res.json())
    ])
    return { items, lists, objectives }
}

export async function activityPageLoader({params}: LoaderFunctionArgs) {
  const { activityTag } = params

  const activities = await fetch('/data/activityPageData.json')
    .then(res => res.json())
          
  if (!activityTag || !Object.hasOwn(activities, activityTag)) {
    // return redirect('/acquisition')
    throw new Response('Activity not found', { status: 404 })
  }
  const items = await getItems()          
  return { items, activities }
}
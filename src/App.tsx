import React from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.tsx'
import './App.css'
import Acquisition from './pages/Acquisition/Acquisition.tsx'
import Items from './pages/Items/Items.tsx'
import ItemDetail from './pages/ItemDetail/ItemDetail.tsx'
import Vendor from './pages/Vendor/Vendor.tsx'
import Box from './pages/Box/Box.tsx'
import List from './pages/List/List.tsx'
import Activity from './pages/Activity/Activity.tsx'
import { inventoryLoader, fullItemDataLoader, vendorAndItemLoader, rewardBoxLoader, listPageLoader, activityPageLoader } from './utilities/Inventory.loader.ts'
import '/data/d1_icons/img/destiny_content/items/set_blank.png'

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        index:true,
        element:<h2>Home page</h2>
      },
      { 
        path:"acquisition",
        element:<Acquisition />
      },
      { 
        path:"collection",
        element:<h2>Collection Page Not Yet Available</h2>,
        loader: inventoryLoader
      },
      { 
        path:"items",
        element:<Items />,
        loader: inventoryLoader
      },
      {
        path:"item/:itemHash",
        element:<ItemDetail />,
        loader: fullItemDataLoader
      },
      {
        path:"vendor/:vendorTag",
        element:<Vendor />,
        loader: vendorAndItemLoader
      },
      {
        path:"box/:boxTag",
        element:<Box />,
        loader: rewardBoxLoader
      },
      {
        path:"list/:listTag",
        element:<List />,
        loader: listPageLoader
      },
      {
        path:"activity/:activityTag",
        element:<Activity />,
        loader: activityPageLoader
      }
    ]
  }
])

export default function App() {

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<h2>Home page</h2>} />
  //         <Route path="acquisition" element={<h2>Acquisition page</h2>} />
  //         <Route path="collection" element={<h2>Collection page</h2>} />
  //         <Route path="items" element={<Items />} />

  //         <Route path="item/:itemHash" element={<ItemDetail />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // )

  return <RouterProvider router={customRouter} />
}


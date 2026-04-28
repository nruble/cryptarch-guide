import React from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.tsx'
import './App.css'
import Items from './pages/Items/Items.tsx'
import ItemDetail from './pages/ItemDetail/ItemDetail.tsx'
import { inventoryLoader, fullItemDataLoader } from './utilities/Inventory.loader.ts'

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
        element:<h2>Acquisition page</h2>,
        loader: inventoryLoader
      },
      { 
        path:"collection",
        element:<h2>Collection page</h2>,
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


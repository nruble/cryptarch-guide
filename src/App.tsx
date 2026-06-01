import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.tsx'
import './App.scss'
import Home from './pages/Home/Home.tsx'
import Acquisition from './pages/Acquisition/Acquisition.tsx'
import Items from './pages/Items/Items.tsx'
import ItemDetail from './pages/ItemDetail/ItemDetail.tsx'
import Vendor from './pages/Vendor/Vendor.tsx'
import Box from './pages/Box/Box.tsx'
import List from './pages/List/List.tsx'
import Activity from './pages/Activity/Activity.tsx'
import LoadingPage from './pages/LoadingPage/LoadingPage.tsx'
import RootErrorBoundary from './pages/RootErrorBoundary/RootErrorBoundary.tsx'
import { inventoryLoader, fullItemDataLoader, vendorAndItemLoader, rewardBoxLoader, listPageLoader, activityPageLoader } from './utilities/data.loader.ts'
import '/data/d1_icons/img/destiny_content/items/set_blank.png'

const customRouter = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        ErrorBoundary: RootErrorBoundary,
        HydrateFallback: LoadingPage,
        children: [
          { 
            index:true,
            Component: Home
          },
          { 
            path:"acquisition",
            Component: Acquisition
          },
          { 
            path:"collection",
            element:<h2>Collection Page Not Yet Available</h2>,
            loader: inventoryLoader
          },
          { 
            path:"items",
            Component: Items,
            loader: inventoryLoader
          },
          {
            path:"item/:itemHash",
            Component: ItemDetail,
            loader: fullItemDataLoader
          },
          {
            path:"vendor/:vendorTag",
            Component: Vendor,
            loader: vendorAndItemLoader
          },
          {
            path:"box/:boxTag",
            Component: Box,
            loader: rewardBoxLoader
          },
          {
            path:"list/:listTag",
            Component: List,
            loader: listPageLoader
          },
          {
            path:"activity/:activityTag",
            Component: Activity,
            loader: activityPageLoader
          },
          {
            path:'*',
            loader: ()=> {throw new Response('Page not found', {status: 404})},
            Component: () => null
          }
        ]
      }

    ]
  }
])

export default function App() {

  return <RouterProvider router={customRouter} />
}
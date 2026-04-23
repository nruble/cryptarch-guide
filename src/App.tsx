import React from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Layout from './components/Layout.tsx'
import './App.css'
import Items from './pages/Items/Items.tsx'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Home page</h2>} />
          <Route path="acquisition" element={<h2>Acquisition page</h2>} />
          <Route path="collection" element={<h2>Collection page</h2>} />
          <Route path="items" element={<Items />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


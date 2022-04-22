import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Index from './components/Index'
import Home from './components/Landing/Home'
import About from './components/About/About'

export default function MyRoutes() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}



import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../Pages/Home";
import About from '../Pages/About';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  )
}
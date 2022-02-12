import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'

import Home from "../Pages/Home";
import About from '../Pages/About';
import Error404 from "../Pages/Error404";
import PeopleList from "../Pages/PeopleList";
import Dashboard from "../Pages/Dashboard";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} /> 
        <Route 
          path="/Dashboard" 
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
          <Route path="*" element={<Error404 />} />
          <Route path=" /peopleList" element={<PeopleList />} />
      </Routes>
    </BrowserRouter>
  )
}
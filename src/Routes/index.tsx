import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'

import Home from "../Pages/Home";
import About from '../Pages/About';
import Error404 from "../Pages/Error404";
import PeopleList from "../Pages/PeopleList";
import Dashboard from "../Pages/Dashboard";
import GitHubProfile from "../Pages/GitHubProfile";
import ClassList from "../Pages/ClassList";


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

          <Route path="/PeopleList" element={<PeopleList />} />
          <Route path="/ClassList" element={<ClassList />} />
          <Route path="/GitHubProfile" element={<GitHubProfile />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
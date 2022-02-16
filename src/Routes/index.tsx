import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { useSettings } from '../Hooks/settings';

import Home from "../Pages/Home";
import About from '../Pages/About';
import Error404 from "../Pages/Error404";
import PeopleList from "../Pages/PeopleList";
import Dashboard from "../Pages/Dashboard";
import GitHubProfile from "../Pages/GitHubProfile";
import ClassList from "../Pages/ClassList";
import Loading from "../Pages/Loading";
import Login from "../Pages/Login";

export default function AppRoutes() {
  const { loadingSettings, settings } = useSettings();
  const enableDashboardLink = settings.find(
    (x) => x.name === 'enableDashboard'
  )?.value;

  return (
    <BrowserRouter>
      <Routes>
        {loadingSettings ? (
          <Route path="*" element={<Loading />} />
        ) : (
          <>
            <Route path="/" element={<Login />} />
            {/* <Route path="/" element={user?.id ? <Home /> : <Login />} /> */}
            <Route
              path="/home"
              element={ <RequireAuth> <Home /> </RequireAuth> } />
            <Route path="/about" element={<About />} />
            {enableDashboardLink === 'true' && (
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
            )}
            <Route
              path="/peopleList"
              element={
                <RequireAuth>
                  <PeopleList />
                </RequireAuth>
              }
            />
            <Route
              path="/githubProfile"
              element={
                <RequireAuth>
                  <GitHubProfile />
                </RequireAuth>
              }
            />
            <Route
              path="/classList"
              element={
                <RequireAuth>
                  <ClassList />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Error404 />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}
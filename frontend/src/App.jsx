import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard/Dashboard'
import AddPingTransition from './components/Transitions/AddPingTransition/AddPingTransition'
import NearbyServices from './pages/NearbyServices/NearbyServices'
import Maps from './components/Maps/Maps'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Analytics from './pages/Analytics/Analytics'
import OverallHotSpots from './pages/Analytics_sections/OverallHotSpots/OverallHotSpots'
import PoliceHotSpots from './pages/Analytics_sections/PoliceHotSpots/PoliceHotSpots'
import HealthHotSpots from './pages/Analytics_sections/HealthHotSpots/HealthHotSpots'
import FireHotSpots from './pages/Analytics_sections/FireHotSpots/FireHotSpots'
import ProtectRoutes from './components/ProtectRoutes/ProtectRoutes'

import './App.css'

function App() {
  const { isSuccess } = useSelector((state) => state.login)
  const routesArray = [
    { isSuccess: isSuccess, Component: LandingPage, to: '/' },
    { isSuccess: isSuccess, Component: AddPingTransition, to: '/loading' },
    { isSuccess: isSuccess, Component: NearbyServices, to: '/nearby_services' },
    { isSuccess: isSuccess, Component: Maps, to: '/maps' },
    { isSuccess: isSuccess, Component: Dashboard, to: '/dashboard' },
    { isSuccess: isSuccess, Component: Analytics, to: '/dashboard/analytics' },
    {
      isSuccess: isSuccess,
      Component: OverallHotSpots,
      to: '/dashboard/analytics/overall_hotspots',
    },
    {
      isSuccess: isSuccess,
      Component: PoliceHotSpots,
      to: '/dashboard/analytics/police_hotspots',
    },
    {
      isSuccess: isSuccess,
      Component: HealthHotSpots,
      to: '/dashboard/analytics/health_hotspots',
    },
    {
      isSuccess: isSuccess,
      Component: FireHotSpots,
      to: '/dashboard/analytics/fire_hotspots',
    },
  ]

  return (
    <Router>
      <Routes>
        {routesArray.map((route, index) => {
          if (localStorage.getItem('token')) {
            return (
              <Route
                key={index}
                to={route.to}
                element={
                  <ProtectRoutes
                    isSuccess={route.isSuccess}
                    Component={route.Component}
                  />
                }
              />
            )
          }
        })}
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
    </Router>
  )
}

export default App

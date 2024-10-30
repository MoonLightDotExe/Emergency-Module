import { Routes, Route } from 'react-router-dom'

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
import Service_Register from './pages/Service_Register/Service_Register'
import Service_Login from './pages/Service_Login/Service_Login'

import './App.css'

function App() {
  if (!localStorage.getItem('token')) {
    return (
      <Routes>
        <Route
          path='/register'
          Component={Register}
        />
        <Route
          path='/login'
          Component={Login}
        />
        <Route
          path='/service_register'
          Component={Service_Register}
        />
        <Route
          path='/service_login'
          Component={Service_Login}
        />
      </Routes>
    )
  } else {
    return (
      <>
        {localStorage.getItem('token') && (
          <>
            <Navbar />
            <Routes>
              <Route
                path='/'
                Component={LandingPage}
              />
              <Route
                path='/loading'
                Component={AddPingTransition}
              />
              <Route
                path='/nearby_services'
                Component={NearbyServices}
              />
              <Route
                path='/maps'
                Component={Maps}
              />
              <Route
                path='/dashboard'
                Component={Dashboard}
              />

              <Route
                path='/dashboard/analytics'
                Component={Analytics}
              />
              <Route
                path='/dashboard/analytics/overall_hotspots'
                Component={OverallHotSpots}
              />
              <Route
                path='/dashboard/analytics/police_hotspots'
                Component={PoliceHotSpots}
              />
              <Route
                path='/dashboard/analytics/health_hotspots'
                Component={HealthHotSpots}
              />
              <Route
                path='/dashboard/analytics/fire_hotspots'
                Component={FireHotSpots}
              />
            </Routes>
          </>
        )}
      </>
    )
  }
}

export default App

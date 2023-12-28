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
import OverallHotSpots from './pages/Analytics_sections/OverallHotSpots/OverallHotSpots/'

import './App.css'

function App() {
  const { user, isLoading } = useSelector((state) => state.addPing)
  return (
    <Router>
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
          path='/register'
          Component={Register}
        />
        <Route
          path='/login'
          Component={Login}
        />
        <Route
          path='/dashboard/analytics'
          Component={Analytics}
        />
        <Route
          path='/dashboard/analytics/overall_hotspots'
          Component={OverallHotSpots}
        />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage/LandingPage'
import AddPingTransition from './components/Transitions/AddPingTransition/AddPingTransition'
import NearbyServices from './pages/NearbyServices/NearbyServices'
import Maps from './components/Maps/Maps'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { useSelector } from 'react-redux'

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
          path='/register'
          Component={Register}
        />
        <Route
          path='/login'
          Component={Login}
        />
      </Routes>
    </Router>
  )
}

export default App

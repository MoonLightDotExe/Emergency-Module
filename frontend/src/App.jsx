import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage/LandingPage'
import AddPingTransition from './components/Transitions/AddPingTransition/AddPingTransition'
import NearbyServices from './pages/NearbyServices/NearbyServices'
// import Maps from './components/Maps/Maps'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          Component={LandingPage}
        />
        <Route
          path='/test'
          Component={AddPingTransition}
        />
        <Route
          path='/nearby_services'
          Component={NearbyServices}
        />
      </Routes>
    </Router>
  )
}

export default App

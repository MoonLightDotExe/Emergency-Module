import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          Component={LandingPage}
        />
      </Routes>
    </Router>
  )
}

export default App

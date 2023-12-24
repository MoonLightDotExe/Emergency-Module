import React from 'react'
import './LandingPage.css'

import SquareCard from '../../components/SquareCard/SquareCard'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="land-ques">WHAT DO YOU NEED HELP WITH ? </h1>
      <h1 className="land-statement">Help is just one click away</h1>
      <div className="cards">
        <SquareCard />
      </div>
    </div>
  )
}

export default LandingPage

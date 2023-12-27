import React from 'react'
import './SquareCard.css'

import { FaFire } from 'react-icons/fa'
import { FaHospitalUser } from 'react-icons/fa'
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { FaLocationDot } from 'react-icons/fa6'

const SquareCard = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <button
        className="square-card sq-one"
        onClick={handleClick}
      >
        <div className="icon">
          <FaFire />
        </div>
        <h1 className="text">Fire</h1>
      </button>

      <button className="square-card sq-two">
        <div className="icon">
          <FaHospitalUser />
        </div>
        <h1 className="text">Hospital</h1>
      </button>

      <button className="square-card sq-three">
        <div className="icon">
          <GiPoliceOfficerHead />
        </div>
        <h1 className="text">Police</h1>
      </button>

      <button className="square-card sq-four">
        <div className="icon">
          <FaLocationDot />
        </div>
        <h1 className="text">Activity</h1>
      </button>
    </>
  )
}

export default SquareCard

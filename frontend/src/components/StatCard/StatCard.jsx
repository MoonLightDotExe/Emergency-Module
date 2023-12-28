import React from 'react'
import './StatCard.css'

import { FaArrowUp } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa'

import { FaUserDoctor } from 'react-icons/fa6'
import { FaAmbulance } from 'react-icons/fa'
import { PiFireExtinguisherFill } from 'react-icons/pi'
import { MdOutlineFireTruck } from 'react-icons/md'
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { PiBarricadeBold } from 'react-icons/pi'

const StatCard = () => {
  return (
    <>
      <div className="stat-card positive">
        <FaUserDoctor
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">150</h1>
          <h1 className="stat-name">Doctors </h1>
        </div>
        <div className="rates">
          <FaArrowUp size={12} />
          <h1 className="stat-percent">1.5%</h1>
        </div>
      </div>

      <div className="stat-card positive">
        <FaAmbulance
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">70</h1>
          <h1 className="stat-name">Ambulances </h1>
        </div>
        <div className="rates">
          <FaArrowUp size={12} />
          <h1 className="stat-percent">4.1%</h1>
        </div>
      </div>

      <div className="stat-card negative">
        <PiFireExtinguisherFill
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">350</h1>
          <h1 className="stat-name">Firefighters </h1>
        </div>
        <div className="rates">
          <FaArrowDown size={12} />
          <h1 className="stat-percent">0.7%</h1>
        </div>
      </div>

      <div className="stat-card positive">
        <MdOutlineFireTruck
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">202</h1>
          <h1 className="stat-name">Fire Brigades</h1>
        </div>
        <div className="rates">
          <FaArrowUp size={12} />
          <h1 className="stat-percent">1.3%</h1>
        </div>
      </div>

      <div className="stat-card negative">
        <GiPoliceOfficerHead
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">5</h1>
          <h1 className="stat-name">Police Officers</h1>
        </div>
        <div className="rates">
          <FaArrowDown size={12} />
          <h1 className="stat-percent">0.1%</h1>
        </div>
      </div>

      <div className="stat-card positive">
        <PiBarricadeBold
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">23</h1>
          <h1 className="stat-name">Barricades</h1>
        </div>
        <div className="rates">
          <FaArrowUp size={12} />
          <h1 className="stat-percent">3.2%</h1>
        </div>
      </div>
    </>
  )
}

export default StatCard

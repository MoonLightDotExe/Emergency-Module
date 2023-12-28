import React from 'react'
import './StatCard.css'

import { AiOutlineCompass } from 'react-icons/ai'
import { FaArrowUp } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa'

import { SlFire } from 'react-icons/sl'
import { FaPeopleLine } from 'react-icons/fa6'
import { RiEarthquakeFill } from 'react-icons/ri'
import { GiGasStove } from 'react-icons/gi'
import { LiaPeopleCarrySolid } from 'react-icons/lia'
import { MdElectricBolt } from 'react-icons/md'

const StatCard = () => {
  return (
    <>
      <div className="stat-card positive">
        <SlFire
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">150</h1>
          <h1 className="stat-name">Urban Fire</h1>
        </div>
        <div className="rates">
          <FaArrowUp size={12} />
          <h1 className="stat-percent">1.5%</h1>
        </div>
      </div>

      <div className="stat-card positive">
        <FaPeopleLine
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">70</h1>
          <h1 className="stat-name">Riot</h1>
        </div>
        <div className="rates">
          <FaArrowUp size={12} />
          <h1 className="stat-percent">4.1%</h1>
        </div>
      </div>

      <div className="stat-card negative">
        <MdElectricBolt
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">350</h1>
          <h1 className="stat-name">Power Outage</h1>
        </div>
        <div className="rates">
          <FaArrowDown size={12} />
          <h1 className="stat-percent">0.7%</h1>
        </div>
      </div>

      <div className="stat-card positive">
        <LiaPeopleCarrySolid
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">202</h1>
          <h1 className="stat-name">Rescue Operation</h1>
        </div>
        <div className="rates">
          <FaArrowUp size={12} />
          <h1 className="stat-percent">1.3%</h1>
        </div>
      </div>

      <div className="stat-card negative">
        <RiEarthquakeFill
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">5</h1>
          <h1 className="stat-name">Earthquakes</h1>
        </div>
        <div className="rates">
          <FaArrowDown size={12} />
          <h1 className="stat-percent">0.1%</h1>
        </div>
      </div>

      <div className="stat-card positive">
        <GiGasStove
          size={35}
          color="grey"
        />
        <div className="stat-info">
          <h1 className="stat-num">23</h1>
          <h1 className="stat-name">Gas Leaks</h1>
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

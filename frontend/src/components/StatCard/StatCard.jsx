import React from 'react'
import './StatCard.css'

import { AiOutlineCompass } from 'react-icons/ai'
import { FaArrowUp } from 'react-icons/fa'

const StatCard = () => {
  return (
    <div className="stat-card">
      <AiOutlineCompass
        size={35}
        color="grey"
      />
      <div className="stat-info">
        <h1 className="stat-num">327</h1>
        <h1 className="stat-name">Projects</h1>
      </div>
      <div className="rates">
        <FaArrowUp size={12} />
        <h1 className="stat-percent">2.1%</h1>
      </div>
    </div>
  )
}

export default StatCard

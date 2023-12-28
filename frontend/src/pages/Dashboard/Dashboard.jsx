import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Dashboard.css'

import StatCard from '../../components/StatCard/StatCard'

import { LiaListAlt } from 'react-icons/lia'
import { FaFire } from 'react-icons/fa'
import { FaHospitalUser } from 'react-icons/fa'
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { FaLocationDot } from 'react-icons/fa6'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-sidebar">
        <h1 className="s-menu">Menu</h1>
        <ul className="s-list">
          <li>
            <Link>
              <LiaListAlt
                size={30}
                style={{ marginLeft: '18px' }}
              />
              <h1>Collection</h1>
            </Link>
          </li>
          <li>
            <Link>
              <FaFire size={25} />
              <h1>Fire</h1>
            </Link>
          </li>
          <li>
            <Link>
              <FaHospitalUser
                size={25}
                style={{ marginLeft: '18px' }}
              />
              <h1>Hospital</h1>
            </Link>
          </li>
          <li>
            <Link>
              <GiPoliceOfficerHead
                size={25}
                style={{ marginLeft: '5px' }}
              />
              <h1>Police</h1>
            </Link>
          </li>
          <li>
            <Link>
              <FaLocationDot
                size={25}
                style={{ marginLeft: '18px' }}
              />
              <h1>Location</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className="dash-right">
        <div className="stat-cards">
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </div>

        <div className="stat-middle">
          <div className="stat-middle-left">
            <div className="sml-top">
              <div className="sml-top-left">
                <h1>Popular Products</h1>
                <h2>8k social visitors</h2>
              </div>
              <button className="sml-top-right">Add Product</button>
            </div>
          </div>
          <div className="stat-middle-right"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

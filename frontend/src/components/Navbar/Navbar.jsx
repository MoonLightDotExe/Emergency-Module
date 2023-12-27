import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'

import { IoMdMenu } from 'react-icons/io'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className="navbar">
      <div className="dropdown">
        <button onClick={handleClick}>
          <IoMdMenu />
        </button>
        {toggle && <Sidebar setvalue={toggle} />}
      </div>
      <div className="nav-links">
        <span>
          <FaPhoneAlt size={31} />
        </span>
        <span>
          <FaEnvelope size={35} />
        </span>
        <span>
          <MdAccountCircle size={40} />
        </span>
      </div>
    </div>
  )
}

export default Navbar

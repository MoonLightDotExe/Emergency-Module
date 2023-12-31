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
          <IoMdMenu color="#648de5" />
        </button>
        {toggle && <Sidebar setvalue={toggle} />}
      </div>
      <div className="nav-links">
        <Link>
          <FaPhoneAlt
            size={31}
            color="#648de5"
          />
        </Link>
        <Link>
          <FaEnvelope
            size={35}
            color="#648de5"
          />
        </Link>
        <Link>
          <MdAccountCircle
            size={40}
            color="#648de5"
          />
        </Link>
      </div>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'

import './Navbar.css'

import { IoMdMenu } from 'react-icons/io'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className='navbar'>
      <div className='dropdown'>
        <button onClick={handleClick}>
          <IoMdMenu color='#648de5' />
        </button>
        {toggle && (
          <ul className='toggle-menu'>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        )}
      </div>
      <div className='nav-links'>
        <span>
          <FaPhoneAlt
            color='#648de5'
            size={31}
          />
        </span>
        <span>
          <FaEnvelope
            color='#648de5'
            size={35}
          />
        </span>
        <span>
          <MdAccountCircle
            color='#648de5'
            size={40}
          />
        </span>
      </div>
    </div>
  )
}

export default Navbar

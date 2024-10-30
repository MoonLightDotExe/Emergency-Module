import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Navbar.css'

import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { IoMdMenu } from 'react-icons/io'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
} from '@chakra-ui/react'

import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setToggle(!toggle)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    navigate('/login')
  }

  return (
    <div className='navbar'>
      <div className='dropdown'>
        <button onClick={handleClick}>
          <IoMdMenu color='#648de5' />
        </button>
        {toggle && <Sidebar setvalue={toggle} />}
      </div>
      <div className='nav-links'>
        <Link>
          <FaPhoneAlt
            size={31}
            color='#648de5'
          />
        </Link>
        <Link>
          <FaEnvelope
            size={35}
            color='#648de5'
          />
        </Link>
        <Link>
          <Popover placement='bottom-end'>
            <PopoverTrigger>
              <Button bgColor={'#fff'}>
                <MdAccountCircle
                  size={35}
                  color='#648de5'
                />
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Logout?</PopoverHeader>
                <PopoverBody>
                  Are you sure you want to have that Logout?
                </PopoverBody>
                <PopoverFooter>
                  <Button onClick={handleLogout}> Logout </Button>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

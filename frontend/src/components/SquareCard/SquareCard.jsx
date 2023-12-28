import React, { useEffect } from 'react'
import './SquareCard.css'

import { FaFire } from 'react-icons/fa'
import { FaHospitalUser } from 'react-icons/fa'
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { FaLocationDot } from 'react-icons/fa6'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addPing } from '../../features/addPing/addPingSlice'

const SquareCard = () => {
  const dispatch = useDispatch()

  const { user, isLoading } = useSelector((state) => state.addPing)
  const navigate = useNavigate()

  const handleClick = (type) => {
    try {
      let lat, long
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, () => {
          console.log('Unable to retrieve your location')
        })
      } else {
        console.log('Geolocation not supported')
      }
      function success(position) {
        lat = position.coords.latitude
        long = position.coords.longitude
        const userData = {
          lat,
          long,
          type,
        }

        dispatch(addPing(userData))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button
        className='square-card sq-one'
        onClick={() => handleClick(1)}
      >
        <div className='icon'>
          <FaFire />
        </div>
        <h1 className='text'>Fire</h1>
      </button>

      <button
        className='square-card sq-two'
        onClick={() => handleClick(2)}
      >
        <div className='icon'>
          <FaHospitalUser />
        </div>
        <h1 className='text'>Hospital</h1>
      </button>

      <button
        className='square-card sq-three'
        onClick={() => handleClick(3)}
      >
        <div className='icon'>
          <GiPoliceOfficerHead />
        </div>
        <h1 className='text'>Police</h1>
      </button>

      <button
        className='square-card sq-four'
        onClick={() => handleClick(4)}
      >
        <div className='icon'>
          <FaLocationDot />
        </div>
        <h1 className='text'>Activity</h1>
      </button>
    </>
  )
}

export default SquareCard

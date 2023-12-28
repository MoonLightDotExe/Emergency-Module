import React, { useEffect } from 'react'
import SquareCard from '../../components/SquareCard/SquareCard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './LandingPage.css'

const LandingPage = () => {
  const { user, isLoading } = useSelector((state) => state.addPing)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading == true) {
      navigate('/loading')
    }
  }, [isLoading, navigate])

  return (
    <div className='landing-page'>
      <h1 className='land-ques'>WHAT DO YOU NEED HELP WITH ? </h1>
      <h1 className='land-statement'>Help is just one click away</h1>
      <div className='cards'>
        <SquareCard />

        <svg
          className='svg_landing'
          viewBox='0 0 200 200'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='#648de5'
            d='M24.5,-36.2C35,-31.4,49,-30.1,55.6,-23.2C62.2,-16.3,61.4,-3.8,58.4,7.5C55.3,18.7,50,28.7,42.5,36.4C35.1,44.1,25.7,49.6,15.4,52.6C5.2,55.7,-5.7,56.3,-19.9,57C-34,57.7,-51.3,58.6,-62.4,51.1C-73.4,43.6,-78.2,27.8,-76.5,13.4C-74.9,-1,-66.9,-14,-61.7,-29.3C-56.5,-44.7,-54,-62.4,-44.2,-67.6C-34.4,-72.8,-17.2,-65.4,-5.1,-57.5C7,-49.6,14,-41.1,24.5,-36.2Z'
            transform='translate(100 100)'
          />
        </svg>
        <svg
          className='svg_landing_2'
          viewBox='0 0 200 200'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='#648de5'
            d='M45.4,-55.1C59.5,-52.1,72.3,-39.9,70,-27.4C67.7,-14.9,50.3,-2.1,40.7,8.8C31,19.6,29.1,28.5,23.6,35.2C18.1,41.9,9.1,46.4,1.5,44.3C-6.1,42.2,-12.1,33.6,-18.2,27.1C-24.3,20.6,-30.4,16.3,-36,9.3C-41.5,2.4,-46.4,-7.2,-45.8,-16.7C-45.3,-26.3,-39.2,-36,-30.6,-40.7C-22.1,-45.5,-11,-45.4,2.3,-48.5C15.6,-51.7,31.2,-58,45.4,-55.1Z'
            transform='translate(100 100)'
          />
        </svg>
      </div>
    </div>
  )
}

export default LandingPage

import React from 'react'

import { Link } from 'react-router-dom'
import { SimpleGrid, Box, Button } from '@chakra-ui/react'
import { AiOutlineCompass } from 'react-icons/ai'
import { FaArrowUp } from 'react-icons/fa'

import './Analytics.css'

function Analytics() {
  return (
    <div className='analytics_container'>
      <SimpleGrid
        columns={4}
        spacing={10}
      >
        <Box height='15rem'>
          <div className='analytics-card'>
            <AiOutlineCompass
              size={45}
              color='grey'
            />
            <div className='analytics-info'>
              <h1 className='analytics-num'>Get Overall Hot Spots</h1>
              <h1 className='stat-name'>City Wide</h1>
            </div>
            <Link to='./overall_hotspots'>
              <Button colorScheme='blue'>GO</Button>
            </Link>
          </div>
        </Box>
        <Box height='15rem'>
          <div className='analytics-card'>
            <AiOutlineCompass
              size={45}
              color='grey'
            />
            <div className='analytics-info'>
              <h1 className='analytics-num'>Get Police Hot Spots</h1>
              <h1 className='stat-name'>City Wide</h1>
            </div>
            <Link to='./police_hotspots'>
              <Button colorScheme='blue'>GO</Button>
            </Link>
          </div>
        </Box>
        <Box height='15rem'>
          <div className='analytics-card'>
            <AiOutlineCompass
              size={45}
              color='grey'
            />
            <div className='analytics-info'>
              <h1 className='analytics-num'>Get Health Hot Spots</h1>
              <h1 className='stat-name'>City Wide</h1>
            </div>
            <Link to='./health_hotspots'>
              <Button colorScheme='blue'>GO</Button>
            </Link>
          </div>
        </Box>
        <Box height='15rem'>
          <div className='analytics-card'>
            <AiOutlineCompass
              size={45}
              color='grey'
            />
            <div className='analytics-info'>
              <h1 className='analytics-num'>Get Fire Hot Spots</h1>
              <h1 className='stat-name'>City Wide</h1>
            </div>
            <Link to='./fire_hotspots'>
              <Button colorScheme='blue'>GO</Button>
            </Link>
          </div>
        </Box>
        <Box height='15rem'>
          <div className='analytics-card'>
            <AiOutlineCompass
              size={45}
              color='grey'
            />
            <div className='analytics-info'>
              <h1 className='analytics-num'>User Trust Rating</h1>
              <h1 className='stat-name'>District Wise</h1>
            </div>
            <Link to='./user_trust'>
              <Button colorScheme='blue'>GO</Button>
            </Link>
          </div>
        </Box>
      </SimpleGrid>
    </div>
  )
}

export default Analytics

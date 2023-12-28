import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, Spinner, Text } from '@chakra-ui/react'
import './AddPingTransition.css'

function AddPingTransition() {
  const { user, isLoading } = useSelector((state) => state.addPing)
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading == true) {
      navigate('/loading')
    }
    if (isLoading == false) {
      navigate('/nearby_services')
    }
  }, [isLoading, navigate])

  return (
    <Box
      sx={{
        '.container': {
          '--spinner-size': '7rem',
        },
      }}
      className='ping-transition-box'
      display='flex'
    >
      <Spinner
        className='container'
        thickness='8px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      <Text fontSize='5xl'>
        Please Stand by while we attempt to contact the necessary Authorities
      </Text>
    </Box>
  )
}

export default AddPingTransition

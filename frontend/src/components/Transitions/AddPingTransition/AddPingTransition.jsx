import React from 'react'
import { Box, Spinner, Text } from '@chakra-ui/react'
import './AddPingTransition.css'

function AddPingTransition() {
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

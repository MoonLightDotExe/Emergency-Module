import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Box,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Spacer,
  Button,
  Flex,
} from '@chakra-ui/react'

import './NearbyServices.css'

function NearbyServices() {
  const { data } = useSelector((state) => state.addPing)

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleTrack = (e) => {
    const url = `https://www.google.com/maps?q=${e.latitude},${e.longitude}`
    window.open(url, '_blank')
  }

  return (
    <>
      <div className='container_nearby_services'>
        <Text
          className='container_nearby_services--primary'
          fontSize='4xl'
          fontWeight='bold'
          textTransform='uppercase'
        >
          Emergency Units have been deployed to your location.
        </Text>
        <Text
          className='container_nearby_services--primary'
          fontSize='2xl'
          fontWeight='light'
          textTransform='uppercase'
        >
          Please standby or travel to the nearby help centers if possible.
        </Text>
        <Card
          className='container_nearby_services--card'
          variant='outline'
        >
          <Stack spacing='4'>
            {data.map((val) => {
              return (
                <Card
                  key={val.id}
                  variant='elevated'
                >
                  <CardHeader>
                    <Heading size='md'>{val.name}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Flex>
                      <Box>
                        <Text>{val.address}</Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <Button
                          colorScheme='blue'
                          size='lg'
                          onClick={() => handleTrack(val.location)}
                        >
                          {' '}
                          TRACK{' '}
                        </Button>
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
              )
            })}
          </Stack>
        </Card>
      </div>
    </>
  )
}

export default NearbyServices

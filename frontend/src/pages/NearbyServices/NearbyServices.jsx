import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

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
  return (
    <>
      <div className='container_nearby_services'>
        <Text
          className='container_nearby_services--primary'
          fontSize='4xl'
          fontWeight='bold'
          textTransform='uppercase'
        >
          {'AMBULAMPS'} has been deployed to your location.
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
            <Card variant='elevated'>
              <CardHeader>
                <Heading size='md'> Hospital 1</Heading>
              </CardHeader>
              <CardBody>
                <Flex>
                  <Box>
                    <Text>Address 1, ABC, Mumbai-400068</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      colorScheme='blue'
                      size='lg'
                    >
                      {' '}
                      TRACK{' '}
                    </Button>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
            <Card variant='elevated'>
              <CardHeader>
                <Heading size='md'> Hospital 2 </Heading>
              </CardHeader>
              <CardBody>
                <Flex>
                  <Box>
                    <Text>Address 1, ABC, Mumbai-400068</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      colorScheme='blue'
                      size='lg'
                    >
                      {' '}
                      TRACK{' '}
                    </Button>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
            <Card variant='elevated'>
              <CardHeader>
                <Heading size='md'>Hospital 3 </Heading>
              </CardHeader>
              <CardBody>
                <Flex>
                  <Box>
                    <Text>Address 1, ABC, Mumbai-400068</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      colorScheme='blue'
                      size='lg'
                    >
                      {' '}
                      TRACK{' '}
                    </Button>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          </Stack>
        </Card>
      </div>
    </>
  )
}

export default NearbyServices

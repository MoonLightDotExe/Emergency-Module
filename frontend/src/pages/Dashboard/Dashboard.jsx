import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import axios from 'axios'

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import { Link, NavLink } from 'react-router-dom'
import './Dashboard.css'

import StatCard from '../../components/StatCard/StatCard'

import { FaFire } from 'react-icons/fa'
import { FaHospitalUser } from 'react-icons/fa'
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { FaLocationDot } from 'react-icons/fa6'
import { AiOutlineCompass } from 'react-icons/ai'

const Dashboard = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  const position = { lat: 19.076, lng: 72.8777 }

  let arr2 = []

  const [array, setArray] = useState([])

  const getPings = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/tests/active_pings'
      )

      const data2 = await response.data

      data2.data.forEach((val) => {
        arr2.push({
          lat: val.location.latitude,
          lng: val.location.longitude,
        })
      })
      setArray(arr2)
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    getPings()
  }, [])

  setInterval(getPings, 60000)

  return (
    <div className='dashboard'>
      <div className='dash-sidebar'>
        <ul className='s-list'>
          <li>
            <Link to='./analytics'>
              <AiOutlineCompass
                size={25}
                style={{ marginLeft: '18px' }}
              />
              <h1>Analytics</h1>
            </Link>
          </li>
          <li>
            <Link>
              <FaFire size={25} />
              <h1>Fire</h1>
            </Link>
          </li>
          <li>
            <Link>
              <FaHospitalUser
                size={25}
                style={{ marginLeft: '18px' }}
              />
              <h1>Hospital</h1>
            </Link>
          </li>
          <li>
            <Link>
              <GiPoliceOfficerHead
                size={25}
                style={{ marginLeft: '5px' }}
              />
              <h1>Police</h1>
            </Link>
          </li>
          <li>
            <Link>
              <FaLocationDot
                size={25}
                style={{ marginLeft: '18px' }}
              />
              <h1>Location</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className='dash-right'>
        <div className='stat-map'>
          <h1
            style={{
              fontSize: '45px',
              fontWeight: '700',
              margin: '5px 0 5px 25px',
              letterSpacing: '0.15rem',
            }}
          >
            Current Emergencies
          </h1>
          <APIProvider apiKey='AIzaSyA1KHEQejw-DRumfep9wSv4RZehdeUM8Ss'>
            <div
              style={{
                height: '500px',
                width: '1330px',
                margin: '15px 25px',
              }}
            >
              <Map
                zoom={11}
                center={position}
              >
                {array.map((item) => {
                  return (
                    <Marker
                      key={item}
                      position={item}
                    />
                  )
                })}
              </Map>
            </div>
          </APIProvider>
        </div>

        <div className='stat-cards'>
          <StatCard />
        </div>

        <div className='stat-middle'>
          <div className='stat-middle-left'>
            <div className='sml-top'>
              <div className='sml-top-left'>
                <h1>Recent Services</h1>
                <h2>8k social visitors</h2>
              </div>
              <button className='sml-top-right'>See All</button>
            </div>

            <div className='sml-middle'>
              <h1>Service</h1>
              <h1>Service Type</h1>
            </div>

            <ul className='sml-bottom'>
              <li className='sml-bottom-list'>
                {/* <div className="sml-bl-items">Item1</div> */}
                <div className='sml-bl-service'>
                  <h1>Urban Fire</h1>
                  <p>Fire outrages in localities</p>
                </div>
                <div className='sml-bl-service-type'>Fire Emergency</div>
              </li>

              <li className='sml-bottom-list'>
                {/* <div className="sml-bl-items">Item2</div> */}
                <div className='sml-bl-service'>
                  <h1>Flu</h1>
                  <p>Dengue fever </p>
                </div>
                <div className='sml-bl-service-type'>Health Emergency</div>
              </li>

              <li className='sml-bottom-list'>
                {/* <div className="sml-bl-items">Item3</div> */}
                <div className='sml-bl-service'>
                  <h1>Riots</h1>
                  <p>Protests of crowd</p>
                </div>
                <div className='sml-bl-service-type'>Police Emergency</div>
              </li>

              <li className='sml-bottom-list'>
                {/* <div className="sml-bl-items">Item4</div> */}
                <div className='sml-bl-service'>
                  <h1>Accident</h1>
                  <p>Bike Crash</p>
                </div>
                <div className='sml-bl-service-type'>Accident Case</div>
              </li>

              <li className='sml-bottom-list-last'>
                {/* <div className="sml-bl-items">Item5</div> */}
                <div className='sml-bl-service'>
                  <h1>Gas Leak</h1>
                  <p>Gas Leak in slums</p>
                </div>
                <div className='sml-bl-service-type'>Gas Cylinder Outbreak</div>
              </li>
            </ul>
          </div>
          <div className='stat-middle-right'>
            <h1
              style={{
                width: '950px',
                height: '50px',
                fontSize: '30px',
                margin: '0 0 20px 0',
                fontWeight: '700',
                // border: '1px solid black',
                textAlign: 'center',
              }}
            >
              Heading
            </h1>
            <LineChart
              width={900}
              height={450}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              style={{ zIndex: '-1' }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='pv'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <Line
                type='monotone'
                dataKey='uv'
                stroke='#82ca9d'
              />
            </LineChart>
          </div>
        </div>

        <div
          className='stat-lower'
          style={{ marginBottom: '50px' }}
        >
          <div className='stat-lower-heading'>
            <div className='slh-left'>
              <h1>Services Data</h1>
              <p>For year 2022-23</p>
            </div>
            <button className='sml-top-right'>See All </button>
          </div>
          <div className='stat-lower-table'>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Service Name</Th>
                    <Th>Service Type</Th>
                    <Th>Staff</Th>
                    <Th>Resources</Th>
                    <Th>Pings</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Karuna Hospital</Td>
                    <Td>Fire</Td>
                    <Td>Available</Td>
                    <Td>Available</Td>
                    <Td>23</Td>
                  </Tr>

                  <Tr>
                    <Td>Goregaon Police Station</Td>
                    <Td>Riot</Td>
                    <Td>Available</Td>
                    <Td>Available</Td>
                    <Td>17</Td>
                  </Tr>

                  <Tr>
                    <Td>Malad Fire Station</Td>
                    <Td>Fire </Td>
                    <Td>Available</Td>
                    <Td>Unavailable</Td>
                    <Td>57</Td>
                  </Tr>

                  <Tr>
                    <Td>HealthCare Hospital</Td>
                    <Td>Health</Td>
                    <Td>Unvailable</Td>
                    <Td>Available</Td>
                    <Td>41</Td>
                  </Tr>

                  <Tr>
                    <Td>Magathane Police Station</Td>
                    <Td>Police</Td>
                    <Td>Unavailable</Td>
                    <Td>Available</Td>
                    <Td>11</Td>
                  </Tr>

                  <Tr>
                    <Td>LifeLine Hospital</Td>
                    <Td>Health</Td>
                    <Td>Available</Td>
                    <Td>Available</Td>
                    <Td>12</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

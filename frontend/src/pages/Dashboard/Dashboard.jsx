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

import { LiaListAlt } from 'react-icons/lia'
import { FaFire } from 'react-icons/fa'
import { FaHospitalUser } from 'react-icons/fa'
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { FaLocationDot } from 'react-icons/fa6'

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
  const arr = [
    { lat: 19.251335, lng: 72.871162 },
    { lat: 19.257422, lng: 72.867275 },
    { lat: 19.253004, lng: 72.862849 },
    { lat: 19.249297, lng: 72.862487 },
    { lat: 19.252756, lng: 72.865789 },
    { lat: 19.256793, lng: 72.868481 },
    { lat: 19.248791, lng: 72.86835 },
    { lat: 19.247683, lng: 72.866926 },
    { lat: 19.252014, lng: 72.86765 },
    { lat: 19.250876, lng: 72.868061 },
    { lat: 19.248154, lng: 72.866223 },
    { lat: 19.249338, lng: 72.863352 },
    { lat: 19.257032, lng: 72.867622 },
    { lat: 19.250792, lng: 72.864383 },
    { lat: 19.253867, lng: 72.866044 },
    { lat: 19.250307, lng: 72.865011 },
    { lat: 19.247939, lng: 72.868066 },
    { lat: 19.248318, lng: 72.867223 },
    { lat: 19.24693, lng: 72.867794 },
    { lat: 19.25624, lng: 72.865245 },
    { lat: 19.249466, lng: 72.869691 },
    { lat: 19.246392, lng: 72.861212 },
    { lat: 19.250842, lng: 72.868223 },
    { lat: 19.248721, lng: 72.868161 },
    { lat: 19.247203, lng: 72.863578 },
    { lat: 19.24606, lng: 72.865695 },
    { lat: 19.245272, lng: 72.865122 },
    { lat: 19.248822, lng: 72.862793 },
    { lat: 19.256576, lng: 72.864116 },
    { lat: 19.247146, lng: 72.866108 },
    { lat: 19.252863, lng: 72.865326 },
    { lat: 19.255938, lng: 72.867709 },
    { lat: 19.251845, lng: 72.86772 },
    { lat: 19.249222, lng: 72.862635 },
    { lat: 19.256157, lng: 72.868522 },
    { lat: 19.248373, lng: 72.86307 },
    { lat: 19.248354, lng: 72.864491 },
    { lat: 19.248437, lng: 72.865048 },
    { lat: 19.246967, lng: 72.8631 },
    { lat: 19.25677, lng: 72.866865 },
    { lat: 19.250173, lng: 72.864874 },
    { lat: 19.251685, lng: 72.86857 },
    { lat: 19.256806, lng: 72.868933 },
    { lat: 19.254043, lng: 72.86844 },
    { lat: 19.24979, lng: 72.867559 },
    { lat: 19.257207, lng: 72.865204 },
    { lat: 19.24798, lng: 72.865966 },
    { lat: 19.246657, lng: 72.868379 },
    { lat: 19.25609, lng: 72.867094 },
    { lat: 19.251309, lng: 72.86785 },
    { lat: 19.248841, lng: 72.864759 },
  ]

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
    <div className="dashboard">
      <div className="dash-sidebar">
        <ul className="s-list">
          <li>
            <Link>
              <LiaListAlt
                size={30}
                style={{ marginLeft: '18px' }}
              />
              <h1>Collection</h1>
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
      <div className="dash-right">
        <div className="stat-map">
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
          <APIProvider apiKey="AIzaSyA1KHEQejw-DRumfep9wSv4RZehdeUM8Ss">
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
                {arr.map((item) => {
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

        <div className="stat-cards">
          <StatCard />
        </div>

        <div className="stat-middle">
          <div className="stat-middle-left">
            <div className="sml-top">
              <div className="sml-top-left">
                <h1>Recent Services</h1>
                <h2>8k social visitors</h2>
              </div>
              <button className="sml-top-right">See All</button>
            </div>

            <div className="sml-middle">
              <h1>Service</h1>
              <h1>Service Type</h1>
            </div>

            <ul className="sml-bottom">
              <li className="sml-bottom-list">
                {/* <div className="sml-bl-items">Item1</div> */}
                <div className="sml-bl-service">
                  <h1>Urban Fire</h1>
                  <p>Fire outrages in localities</p>
                </div>
                <div className="sml-bl-service-type">Fire Emergency</div>
              </li>

              <li className="sml-bottom-list">
                {/* <div className="sml-bl-items">Item2</div> */}
                <div className="sml-bl-service">
                  <h1>Flu</h1>
                  <p>Dengue fever </p>
                </div>
                <div className="sml-bl-service-type">Health Emergency</div>
              </li>

              <li className="sml-bottom-list">
                {/* <div className="sml-bl-items">Item3</div> */}
                <div className="sml-bl-service">
                  <h1>Riots</h1>
                  <p>Protests of crowd</p>
                </div>
                <div className="sml-bl-service-type">Police Emergency</div>
              </li>

              <li className="sml-bottom-list">
                {/* <div className="sml-bl-items">Item4</div> */}
                <div className="sml-bl-service">
                  <h1>Accident</h1>
                  <p>Bike Crash</p>
                </div>
                <div className="sml-bl-service-type">Accident Case</div>
              </li>

              <li className="sml-bottom-list-last">
                {/* <div className="sml-bl-items">Item5</div> */}
                <div className="sml-bl-service">
                  <h1>Gas Leak</h1>
                  <p>Gas Leak in slums</p>
                </div>
                <div className="sml-bl-service-type">Gas Cylinder Outbreak</div>
              </li>
            </ul>
          </div>
          <div className="stat-middle-right">
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
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
              />
            </LineChart>
          </div>
        </div>

        <div
          className="stat-lower"
          style={{ marginBottom: '50px' }}
        >
          <div className="stat-lower-heading">
            <div className="slh-left">
              <h1>Emergency and Help Available</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <button className="sml-top-right">See All </button>
          </div>
          <div className="stat-lower-table">
            <TableContainer>
              <Table variant="simple">
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

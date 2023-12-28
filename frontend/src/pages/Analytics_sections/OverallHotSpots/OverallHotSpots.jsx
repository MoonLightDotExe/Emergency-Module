import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

function OverallHotSpots() {
  const [clusters, setClusters] = useState([])
  useEffect(() => {
    async function cluster() {
      try {
        const active_pings_response = await axios.get(
          'http://localhost:5000/api/tests/active_pings'
        )

        let latitudes = []
        let longitudes = []

        const data2 = await active_pings_response.data

        data2.data.forEach((val) => {
          latitudes.push(val.location.latitude)
          longitudes.push(val.location.longitude)
        })

        let sendBody = {
          latitudes: latitudes,
          longitudes: longitudes,
          n_clusters: 3,
        }

        const cluster_response = await axios.post(
          'http://127.0.0.1:5000/cluster',
          sendBody
        )

        const cluster_response_data = await cluster_response.data

        console.log(cluster_response_data)
        let cluster = []
        cluster_response_data.cluster_centers.forEach((val) => {
          let body = {
            lat: val[0],
            lng: val[1],
          }
          cluster.push(body)
        })
        console.log(cluster)
        setClusters(cluster)
      } catch (err) {
        throw new Error(err)
      }
    }
    cluster()
  }, [])

  const position = { lat: 19.076, lng: 72.8777 }

  return (
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
          {clusters.map((item) => {
            return (
              <Marker
                key={item}
                position={item}
                label='Cluster Center'
              >
                {' '}
              </Marker>
            )
          })}
        </Map>
      </div>
    </APIProvider>
  )
}

export default OverallHotSpots

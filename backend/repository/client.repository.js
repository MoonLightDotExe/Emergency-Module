const dotenv = require('dotenv').config()
const fires = require('../models/fires.models.js')
const hospitals = require('../models/hospitals.models.js')
const polices = require('../models/polices.models.js')
const pings = require('../models/pings.models.js')

const self = (module.exports = {
  getServices: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(body)

        if (parseInt(body.Type) == 1) {
          try {
            const fire_response = await fires.find({})

            resolve(fire_response)
          } catch (err) {
            reject(err)
          }
        } else if (parseInt(body.Type) == 2) {
          try {
            const hospital_response = await hospitals.find({})
            console.log(hospital_response)

            resolve(hospital_response)
          } catch (err) {
            reject(err)
          }
        } else if (parseInt(body.Type) == 3) {
          try {
            const police_response = await polices.find({})
            console.log(police_response)

            resolve(police_response)
          } catch (err) {
            reject(err)
          }
        } else {
          reject('Invalid Emergency Type!')
        }

        resolve(parseInt(body.Type))
      } catch (err) {
        reject(err)
      }
    })
  },
  addPing: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(body)
        function sortLocationsByDistance(locations, givenLocation) {
          function CalculateEuclideanDistance(location1, location2) {
            const x1 = location1.Lat
            const y1 = location1.Long
            const x2 = location2.Lat
            const y2 = location2.Long

            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
          }

          return locations.sort((location1, location2) => {
            const distance1 = CalculateEuclideanDistance(
              givenLocation,
              location1
            )
            const distance2 = CalculateEuclideanDistance(
              givenLocation,
              location2
            )

            return distance1 - distance2
          })
        }

        const userLocation = body.Location
        const locationsArray = await self.getServices(body)
        const sortedLocations = sortLocationsByDistance(
          locationsArray,
          userLocation
        )
        console.log(sortedLocations)

        const new_ping = await pings.create({
          location: {
            latitude: body.Location.Lat,
            longitude: body.Location.Long,
          },
          type: body.Type,
          user: body.User_ID,
        })

        resolve(sortedLocations)
      } catch (error) {
        reject(error)
      }
    })
  },
})

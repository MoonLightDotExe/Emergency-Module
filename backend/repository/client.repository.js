const dotenv = require('dotenv').config()
const fires = require('../models/fires.models.js')
const hospitals = require('../models/hospitals.models.js')
const polices = require('../models/polices.models.js')
const pings = require('../models/pings.models.js')

const self = (module.exports = {
  getServices: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(parseInt(body.type))

        if (parseInt(body.type) == 1) {
          try {
            const fire_response = await fires.find({})

            resolve(fire_response)
          } catch (err) {
            reject(err)
          }
        } else if (parseInt(body.type) == 2) {
          try {
            const hospital_response = await hospitals.find({})
            console.log(hospital_response)

            resolve(hospital_response)
          } catch (err) {
            reject(err)
          }
        } else if (parseInt(body.type) == 3) {
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

        resolve(parseInt(body.type))
      } catch (err) {
        reject(err)
      }
    })
  },
  addPing: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(body)
        //function to get sorted array of locations by distance
        function sortLocationsByDistance(locations, givenLocation) {
          // Function to calculate Euclidean distance between two locations
          function calculateDistance(location1, location2) {
            const x1 = location1.Lat
            const y1 = location1.Long
            const x2 = location2.Lat
            const y2 = location2.Long

            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
          }

          // Sort locations array based on distance from the given location
          return locations.sort((location1, location2) => {
            const distance1 = calculateDistance(givenLocation, location1)
            const distance2 = calculateDistance(givenLocation, location2)

            return distance1 - distance2
          })
        }

        const userLocation = body.Location
        const locationsArray = await self.getServices(body.Type)
        const sortedLocations = sortLocationsByDistance(
          locationsArray,
          userLocation
        )
        console.log(sortedLocations)

        //create a new ping
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
        //console.log(error);
        reject(error)
      }
    })
  },
})

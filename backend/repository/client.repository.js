const dotenv = require('dotenv').config()
const fires = require('../models/fires.models.js')
const hospitals = require('../models/hospitals.models.js')
const polices = require('../models/polices.models.js')

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
})

const dotenv = require('dotenv').config()
const fire = require('../models/fire.js')
const hospital = require('../models/hospital.js')
const police = require('../models/police.js')

const self = (module.exports = {
  getServices: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(parseInt(body.type))

        if (parseInt(body.type) == 1) {
          try {
            const fire_response = await fire.find({})
            console.log(fire_response)

            resolve(fire_response)
          } catch (err) {
            reject(err)
          }
        } else if (parseInt(body.type) == 2) {
          try {
            const hospital_response = await hospital.find({})
            console.log(hospital_response)

            resolve(hospital_response)
          } catch (err) {
            reject(err)
          }
        } else if (parseInt(body.type) == 3) {
          try {
            const police_response = await police.find({})
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

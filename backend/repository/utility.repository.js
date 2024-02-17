const dotenv = require('dotenv').config()
const fires = require('../models/fires.models.js')
const hospitals = require('../models/hospitals.models.js')
const polices = require('../models/polices.models.js')
const pings = require('../models/pings.models.js')

const self = (module.exports = {
  dynamicData: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        let fireData = await fires.find({})
        let hospitalData = await hospitals.find({})
        let policeData = await polices.find({})

        let fireBrigades = 0
        let fireFighters = 0

        let doctors = 0
        let ambulances = 0

        let policeOfficers = 0
        let policeBarricades = 0

        fireData.map((val) => {
          fireBrigades += val.resources.brigadesAvailable
          fireFighters += val.resources.staffAvailable
        })

        hospitalData.map((val) => {
          doctors += val.resources.staffAvailable
          ambulances += val.resources.ambulancesAvailable
        })

        policeData.map((val) => {
          policeOfficers += val.resources.staffAvailable
          policeBarricades += val.resources.vehiclesAvailable
        })

        let dynData = {
          fire: {
            fireBrigades,
            fireFighters,
          },
          hospital: {
            doctors,
            ambulances,
          },
          police: {
            policeOfficers,
            policeBarricades,
          },
        }
        resolve(dynData)
      } catch (err) {
        reject(err)
      }
    })
  },
})

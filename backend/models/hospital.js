const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please Enter Email'],
  },
  password: {
    type: String,
    required: [true, 'Please Enter Password'],
  },
  areaOfEffect: {
    type: Number,
  },
  address: {
    type: String,
    required: [true, 'Enter Address'],
  },
  location: {
    latitude: {
      type: Number,
      required: [true, 'Enter Latitude'],
      ref: 'Ping',
    },
    longitude: {
      type: Number,
      required: [true, 'Enter Longitude'],
      ref: 'Ping',
    },
  },
  pingHistory: {
    activePings: {
      type: [mongoose.Schema.Types.ObjectId],
      //ref:
    },
    pastPings: {
      type: [mongoose.Schema.Types.ObjectId],
      //ref:
    },
  },
  resources: {
    staffAvailable: {
      type: Number,
      required: [true, 'Enter Number of Staff'],
    },
    ambulancesAvailable: {
      type: Number,
      required: [true, 'Enter Number of Fire Brigades'],
    },
  },
  // reports:{

  // }
})
module.exports = mongoose.model('Hospital', hospitalSchema)

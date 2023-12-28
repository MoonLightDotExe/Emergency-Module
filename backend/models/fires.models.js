const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const fireSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
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
    lattitude: {
      type: Number,
      required: [true, 'Enter Lattitude'],
    },
    longitude: {
      type: Number,
      required: [true, 'Enter Longitude'],
    },
  },
  pingHistory: {
    activePings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Ping',
    },
    pastPings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Ping',
    },
  },
  resources: {
    staffAvailable: {
      type: Number,
      required: [true, 'Enter Number of Staff'],
    },
    brigadesAvailable: {
      type: Number,
      required: [true, 'Enter Number of Fire Brigades'],
    },
  },
  // reports:{

  // }
})

module.exports = mongoose.model('fires', fireSchema)

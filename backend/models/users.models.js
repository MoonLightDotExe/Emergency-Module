const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  personalInformation: {
    bloodType: String,
    medicalHistory: [String],
    dateOfBirth: Date,
  },
  email: {
    type: String,
    required: [true, 'Please Enter Email'],
  },
  password: {
    type: String,
    required: [true, 'Please Enter Password'],
  },
  contact: {
    personal: {
      type: String,
      // required: [true, 'Enter Personal Contact'],
    },
    family: {
      type: String,
      // required: [true, 'Enter Family Contact'],
    },
  },
  aadharId: {
    type: String,
    // required: [true, 'Enter Aadhar Number'],
  },
  address: {
    type: String,
    // required: [true, 'Enter Address'],
  },
  pingHistory: {
    activePings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Pings',
    },
    pastPings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Pings',
    },
  },
  trustFactor: {
    type: Number,
    default: 100,
  },
  type: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Users', userSchema)

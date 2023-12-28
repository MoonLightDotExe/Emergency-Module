const mongoose = require('mongoose')

const pingSchema = new mongoose.Schema({
  location: {
    latitude: {
      type: Number,
      required: [true, 'Enter Latitude'],
    },
    longitude: {
      type: Number,
      required: [true, 'Enter Longitude'],
    },
  },
  type: {
    type: Number,
    required: [true, 'Enter Type of Ping'],
  },
  // reports:{

  // }
})

module.exports = mongoose.model('pings', pingSchema)

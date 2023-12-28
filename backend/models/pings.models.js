const mongoose = require('mongoose')

const pingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Enter User'],
    ref: 'User',
  },
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

const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.config')

const app = express()

const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

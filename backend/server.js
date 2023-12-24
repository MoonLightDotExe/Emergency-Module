const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.config')
const testRouter = require('./routes/tests.routes')

const app = express()

const PORT = process.env.PORT || 5000

connectDB()

app.use(express.urlencoded({ extended: false }))

app.use('/tests', testRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.config')
const testRouter = require('./routes/tests.routes')
var bodyParser = require('body-parser');
var options = {
  inflate: true,
  limit: '100kb',
  type: 'application/octet-stream'
};
const app = express()

const PORT = process.env.PORT || 5000

connectDB()

app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser.raw(options));
app.use(bodyParser.json({ limit: '30mb', extended: true }))

app.use('/tests', testRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

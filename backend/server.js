const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.config')
const bodyParser = require('body-parser')
const testRouter = require('./routes/tests.routes')
const authRouter = require('./routes/auth.routes')
const tests = require('./controllers/tests.controllers')
const cors = require('cors')
const { Server } = require('socket.io')
const events = require('events')

const app = express()

app.use(cors())

const PORT = process.env.PORT || 5000

connectDB()

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '30mb', extended: true }))

app.get('/', (req, res) => {
  res.send('HELLO')
})

app.use('/api/tests', testRouter)
app.use('/api/auth', authRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

const io = new Server({
  cors: {
    origin: '*',
  },
})

let computedData = {}

const evenEmitter = new events.EventEmitter()

setInterval(async () => {
  computedData = await tests.test_dynamic_data()
  console.log(computedData)
  evenEmitter.emit('liveData')
}, 5000)

io.on('connection', (socket) => {
  evenEmitter.on('liveData', () => {
    socket.broadcast.emit('updateData', computedData)
  })
})

io.listen(4000)

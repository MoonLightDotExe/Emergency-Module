const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.config')
const bodyParser = require('body-parser')
const testRouter = require('./routes/tests.routes')
const authRouter = require('./routes/auth.routes')
const cors = require('cors')
const { Server } = require('socket.io')

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
    origin: '*'
  }
})

io.on('connection', (socket) => {
  socket.emit('event')
})

io.listen(4000)
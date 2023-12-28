const express = require('express')
const auth_controllers = require('../controllers/auth.controllers')

const authRouter = express.Router()

authRouter.post('/register', auth_controllers.registerUser)

module.exports = authRouter

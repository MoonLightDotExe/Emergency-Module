const express = require('express')
const testRouter = express.Router()
const tests = require('../controllers/tests.controllers')

testRouter.post('/getServices', tests.test_get_services)

testRouter.post('/addPing', tests.test_add_ping)

module.exports = testRouter

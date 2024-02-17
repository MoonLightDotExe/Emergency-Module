const express = require('express')
const testRouter = express.Router()
const tests = require('../controllers/tests.controllers')

testRouter.post('/getServices', tests.test_get_services)

testRouter.post('/addPing', tests.test_add_ping)

testRouter.get('/active_pings', tests.test_get_active_pings)

testRouter.get('/testDynamicData', tests.test_dynamic_data)

module.exports = testRouter

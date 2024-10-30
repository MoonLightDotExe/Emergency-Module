const dotenv = require('dotenv').config()
const auth_repo = require('../repository/auth.repository')

module.exports = {
  registerUser: async (req, res) => {
    try {
      const data = await auth_repo.registerUser(req.body)

      res.status(201).json({
        success: true,
        data,
        message: 'User registered successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },

  loginUser: async (req, res) => {
    try {
      const data = await auth_repo.loginUser(req.body)

      res.status(200).json({
        success: true,
        data,
        message: 'User registered successfully!',
      })
    } catch (err) {
      res.status(401).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },

  registerService: async (req, res) => {
    try {
      const data = await auth_repo.registerService(req.body)

      res.status(200).json({
        success: true,
        data,
        message: 'Service registered successfully!',
      })
    } catch (err) {
      res.status(401).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },

  loginService: async (req, res) => {
    try {
      const data = await auth_repo.loginService(req.body)

      res.status(200).json({
        success: true,
        data,
        message: 'Service Logged In successfully!',
      })
    } catch (err) {
      res.status(401).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },
}

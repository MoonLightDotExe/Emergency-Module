const dotenv = require('dotenv').config()
const auth_repo = require('../repository/auth.repository')

const jwt = require('jsonwebtoken')

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
}

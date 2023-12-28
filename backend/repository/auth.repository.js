const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')
const users = require('../models/users.models.js')
const jwt = require('jsonwebtoken')

const self = (module.exports = {
  registerUser: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const {
          name,
          email,
          password,
          type,
          address,
          aadhar,
          contact_personal,
          contact_family,
        } = body
        if (!email || !password || !name) {
          reject({
            status: 400,
            message: 'Missing Data!',
          })
        }

        const userExists = await users.findOne({ email })

        console.log(userExists)

        if (userExists) {
          reject({
            status: 401,
            message: 'User already exists!',
          })
        } else {
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(password, salt)
          const user = await users.create({
            name,
            email,
            password: hashedPassword,
            type,
            address,
            aadharId: aadhar,
            contact: {
              personal: contact_personal,
              family: contact_family,
            },
          })
          resolve({
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: self.generateToken(user._id),
          })
        }
      } catch (err) {
        reject(err)
      }
    })
  },
  generateToken: () => {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
  },
})

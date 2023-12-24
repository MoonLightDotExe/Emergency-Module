const dotenv = require('dotenv').config()
const client_repo = require('../repository/client.repository')

module.exports = {
  test_get_services: async (req, res) => {
    try {
      const data = await client_repo.getServices(req.body)

      console.log(data)
      res.json({
        success: true,
        data,
        msg: 'Got Services Successfully',
      })
    } catch (err) {
      res.json({
        success: false,
        Error: err,
        msg: 'Get services failed!',
      })
    }
  },
}

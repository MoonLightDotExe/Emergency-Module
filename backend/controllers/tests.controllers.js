const dotenv = require('dotenv').config()
const client_repo = require('../repository/client.repository')
const utility_repo = require('../repository/utility.repository')

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
  test_add_ping: async (req, res) => {
    try {
      // console.log(req.body);
      const data = await client_repo.addPing(req.body)
      setTimeout(() => {
        console.log('data aaya: ' + data)
        res.status(201).json({
          success: true,
          data,
          msg: 'Added Ping Successfully',
        })
      }, 100)
    } catch (error) {
      res.status(404).json({
        success: false,
        Error: error,
        msg: 'Add ping failed!',
      })
    }
  },

  test_get_active_pings: async (req, res) => {
    try {
      const data = await client_repo.getActivePings()
      console.log(data)

      res.status(200).json({
        success: true,
        data,
        msg: 'Retrieved Active Pings Successfully!',
      })
    } catch (err) {
      res.status(404).json({
        success: false,
        Error: err,
        msg: 'Get Active Pings failed!',
      })
    }
  },

  test_dynamic_data: async (req, res) => {
    try {
      // const data = await utility_repo.dynamicData(req.body)
      const data = await utility_repo.dynamicData()
      console.log(data)

      // res.status(200).json({
      //   success: true,
      //   data,
      //   msg: 'Retrieved Dynamic Data Successfully!',
      // })
      return {
        success: true,
        data,
        msg: 'Retrieved Dynamic Data Successfully!',
      }
    } catch (err) {
      // res.status(404).json({
      //   success: false,
      //   Error: err,
      //   msg: 'Failed to get Dynamic Data!',
      // })
      return {
        success: false,
        Error: err,
        msg: 'Failed to get Dynamic Data!',
      }
    }
  },
}

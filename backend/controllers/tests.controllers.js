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
  test_add_ping: async (req, res) => {
    try {
      // console.log(req.body);
      const data = await client_repo.addPing(req.body);
      console.log(data);
      res.json({
        success: true,
        data,
        msg: 'Added Ping Successfully',
      })
    } catch (error) {
      res.json({
        success: false,
        Error: error,
        msg: 'Add ping failed!',
      })
    }
  }
}

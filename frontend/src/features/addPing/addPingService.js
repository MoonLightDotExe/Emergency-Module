import axios from 'axios'

const API_URL = 'http://localhost:5000/tests/addPing'

const addPingService = async (userData) => {
  try {
    console.log(userData)
    let sendData = {
      Location: {
        Long: userData.long,
        Lat: userData.lat,
      },
      User_ID: 123,
      Type: parseInt(userData.type),
    }

    const response = await axios.post(API_URL, sendData)

    const data = await response.data

    if (response.data.success) {
      localStorage.setItem('isActive', true)
    }

    return data
  } catch (err) {
    return err
  }
}

export default addPingService

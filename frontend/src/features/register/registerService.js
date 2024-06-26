import axios from 'axios'

const API_URL = 'http://localhost:5000'

const registerService = async (userData) => {
  try {
    console.log(userData)

    const response = await axios.post(`${API_URL}/api/auth/register`, userData)

    const data = await response.data
    console.log(data)

    if (data.success) {
      console.log('123')
    }
    console.log(data)
    return data.data
  } catch (err) {
    console.log(err)
    return err
  }
}

export default registerService

import axios from 'axios'

const API_URL = 'http://localhost:5000'

const loginService = async (userData) => {
  try {
    console.log(userData)

    const response = await axios.post(`${API_URL}/api/auth/login`, userData)

    const data = await response.data

    if (response.data.success) {
      localStorage.setItem('user_id', data.data.id)
      localStorage.setItem('token', data.data.token)
    }
    console.log(data)
    return data.data
  } catch (err) {
    console.log(err)
    return err
  }
}

export default loginService

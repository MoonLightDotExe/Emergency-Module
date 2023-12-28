import axios from 'axios'

const API_URL = 'http://localhost:5000/api/auth/register'

const registerService = async (userData) => {
    try {
        console.log(userData)

        const response = await axios.post(API_URL, userData);

        const data = await response.data

        if (response.data.success) {

        }
        console.log(data);
        return data.data
    } catch (err) {
        console.log(err);
        return err
    }
}

export default registerService

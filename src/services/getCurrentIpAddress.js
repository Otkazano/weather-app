import axios from 'axios'

export async function getCurrentIpAddress () {
  try {
    const response = await axios.get(`https://ipapi.co/json/`)
    return response.data
  } catch (error) {
    return error
  }
}

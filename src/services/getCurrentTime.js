import axios from 'axios'

export default async function getCurrentTime (timeZone) {
  try {
    const response = await axios.get(
      `https://tools.aimylogic.com/api/now?tz=${timeZone}&format=dd/MMM/yy/EEEE/HH/mm`
    )
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getCurrentTimeSecondWay (latitude, longitude) {
  try {
    const response = await axios.get(
      `https://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.NEXT_PUBLIC_API_KEY_LOCATION}&format=json&by=position&lat=${latitude}&lng=${longitude}`
    )
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

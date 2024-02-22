import axios from 'axios'

export async function getWeatherData (cityName) {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}`,
      {
        params: {
          key: process.env.NEXT_PUBLIC_API_KEY,
          lang: 'ru',
          unitGroup: 'metric'
        }
      }
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.status)
  }
}

export async function getCurrentWeatherData (cityName) {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/next2days`,
      {
        params: {
          key: process.env.NEXT_PUBLIC_API_KEY,
          lang: 'ru',
          unitGroup: 'metric'
        }
      }
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.status)
  }
}

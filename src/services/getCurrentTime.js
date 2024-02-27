import axios from 'axios'

// export async function getCurrentTime (timeZone) {
//   try {
//     const response = await axios.get(
//       `https://tools.aimylogic.com/api/now?tz=${timeZone}&format=dd/MMM/yy/EEEE/HH/mm`
//     )
//     return response.data
//   } catch (error) {
//     throw new Error(error)
//   }
// }

export async function getCurrentTime (timeZone) {
  try {
    const response = await axios.get(
      `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`
    )
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

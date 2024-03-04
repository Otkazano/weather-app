import axios from 'axios'

export async function getHintForInput (query) {
  try {
    const response = await axios.post(
      `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`,
      { query: query, count: 20 },
      {
        headers: {
          Authorization: `Token ${process.env.NEXT_PUBLIC_API_KEY_LOCATION}`
        }
      }
    )
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

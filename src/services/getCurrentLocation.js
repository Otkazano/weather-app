import axios from 'axios';

export async function getCurrentLocation(ipAddress) {
  try {
    const response = await axios.get(
      `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ipAddress}`,
      {
        headers: {
          Authorization: `Token ${process.env.NEXT_PUBLIC_API_KEY_LOCATION}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

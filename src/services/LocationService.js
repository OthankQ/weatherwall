const axios = require('axios');

const root = 'https://api.openweathermap.org/geo/1.0/direct';

export async function getCoordByCityName(cityName) {
  try {
    const response = await axios.get(
      `${root}?q=${cityName}&appid=30faf2f9812e649e9749c0fddc6f60a8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

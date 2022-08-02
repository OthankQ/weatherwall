const axios = require('axios');

const root = 'https://api.openweathermap.org/geo/1.0/direct';

export async function getCoordByCityName(cityName) {
  try {
    const response = await axios.get(
      `${root}?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

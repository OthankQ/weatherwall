const axios = require('axios');

const root = 'https://api.openweathermap.org/data/2.5/weather';

export async function getCurrentWeatherByCoord(lat, long) {
  try {
    const response = await axios.get(
      `${root}?lat=${lat}&lon=${long}&appid=30faf2f9812e649e9749c0fddc6f60a8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

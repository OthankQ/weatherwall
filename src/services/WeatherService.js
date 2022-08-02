const axios = require('axios');

const root = 'https://api.openweathermap.org/data/2.5/weather';

export async function getCurrentWeatherByCoord(lat, long) {
  try {
    const response = await axios.get(
      `${root}?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

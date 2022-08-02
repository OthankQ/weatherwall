import React, { useState } from 'react';

import { getCurrentWeatherByCoord } from './services/WeatherService';
import { getCoordByCityName } from './services/LocationService';

import './App.css';

function App() {
  const [cityName, setCityName] = useState('');

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setCityName(e.currentTarget.value);
  };

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    getCoordByCityName(cityName).then((res) => {
      const lat = res[0].lat;
      const lon = res[0].lon;
      getCurrentWeatherByCoord(lat, lon).then((res) => {
        console.log(res);
      });
    });
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} value={cityName} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default App;

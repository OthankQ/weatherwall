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

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearchClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
      e.target.value = '';
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={handleInputChange}
        value={cityName}
        onKeyDown={handleEnter}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default App;

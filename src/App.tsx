import React, { useState } from 'react';

import { getCurrentWeatherByCoord } from './services/WeatherService';
import { getCoordByCityName } from './services/LocationService';

import './App.css';

function App() {
  const [cityName, setCityName] = useState('');
  const [completeCityName, setCompleteCityName] = useState('');
  const [clouds, setClouds] = useState(0);
  const [temp, setTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);

  const convertKelvintoCelsius = (kelvin: number): number => {
    return Math.round(kelvin - 273.15);
  };

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
        setCompleteCityName(res.name);
        setClouds(res.clouds.all);
        setTemp(convertKelvintoCelsius(res.main.temp));
        setMinTemp(convertKelvintoCelsius(res.main.temp_min));
        setMaxTemp(convertKelvintoCelsius(res.main.temp_max));
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      className="container"
    >
      <div className="App">
        <input
          type="text"
          onChange={handleInputChange}
          value={cityName}
          onKeyDown={handleEnter}
        />

        <button onClick={handleSearchClick}>Search</button>

        <h1>City: {completeCityName}</h1>
        <h2>Clouds: {clouds}</h2>
        <h2>Avg Temp: {temp}</h2>
        <h2>Min Temp: {minTemp}</h2>
        <h2>Max Temp: {maxTemp}</h2>
      </div>
    </div>
  );
}

export default App;

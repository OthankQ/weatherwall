import React, { useState, createContext } from 'react';

import Searchbar from './components/searchbar/Searchbar';
import Display from './components/display/Display';

import { getCurrentWeatherByCoord } from './services/WeatherService';
import { getCoordByCityName } from './services/LocationService';

import './App.css';

export type WeatherContextType = {
  cityName: string;
  completeCityName: string;
  clouds: number;
  temp: number;
  minTemp: number;
  maxTemp: number;
};

export const WeatherContext = createContext({} as WeatherContextType);

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

  const convertKelvintoFahrenheit = (kelvin: number): number => {
    return Math.round((kelvin - 273.15) * (9 / 5) + 32);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setCityName(e.currentTarget.value);
  };

  const handleSearchClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    const coord = await getCoordByCityName(cityName);
    const lat = coord[0].lat;
    const lon = coord[0].lon;

    const data = await getCurrentWeatherByCoord(lat, lon);

    console.log(data);

    setCompleteCityName(data.name);
    setClouds(data.clouds.all);
    setTemp(convertKelvintoCelsius(data.main.temp));
    setMinTemp(convertKelvintoCelsius(data.main.temp_min));
    setMaxTemp(convertKelvintoCelsius(data.main.temp_max));
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearchClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
      e.target.value = '';
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        cityName,
        completeCityName,
        clouds,
        temp,
        minTemp,
        maxTemp,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
        className="container"
      >
        <Searchbar
          handleInputChange={handleInputChange}
          handleSearchClick={handleSearchClick}
          cityName={cityName}
          handleEnter={handleEnter}
        />

        <Display />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;

import { useContext } from 'react';
import { WeatherContextType } from '../../App';
import { WeatherContext } from '../../App';

const Display = () => {
  const data: WeatherContextType = useContext(WeatherContext);

  return (
    <div className="display">
      <h1>City: {data.completeCityName}</h1>
      <h2>Clouds: {data.clouds}</h2>
      <h2>Avg Temp: {data.temp}</h2>
      <h2>Min Temp: {data.minTemp}</h2>
      <h2>Max Temp: {data.maxTemp}</h2>
    </div>
  );
};

export default Display;

import { useContext } from 'react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';

import { WeatherContextType } from '../../App';
import { WeatherContext } from '../../App';

const Display = () => {
  const data: WeatherContextType = useContext(WeatherContext);

  return (
    <Stat>
      <StatLabel>City</StatLabel>
      <StatNumber>{data.completeCityName}</StatNumber>

      <h2>Clouds: {data.clouds}</h2>
      <h2>Avg Temp: {data.temp}</h2>
      <h2>Min Temp: {data.minTemp}</h2>
      <h2>Max Temp: {data.maxTemp}</h2>
    </Stat>
  );
};

export default Display;

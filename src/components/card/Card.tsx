import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';

import useWeatherStore from '../../useWeatherStore';

const Card = () => {
  const temp = useWeatherStore((state: any) => state.temp);
  const minTemp = useWeatherStore((state: any) => state.minTemp);
  const maxTemp = useWeatherStore((state: any) => state.maxTemp);
  const clouds = useWeatherStore((state: any) => state.clouds);
  const cityName = useWeatherStore((state: any) => state.cityName);

  const convertKelvintoFahrenheit = (kelvin: number): number => {
    return Math.round((kelvin - 273.15) * (9 / 5) + 32);
  };

  return (
    <Stat>
      <StatLabel>City</StatLabel>
      <StatNumber>{cityName}</StatNumber>

      <h2>Clouds: {clouds}</h2>
      <h2>Avg Temp: {convertKelvintoFahrenheit(temp)} F</h2>
      <h2>Min Temp: {convertKelvintoFahrenheit(minTemp)} F</h2>
      <h2>Max Temp: {convertKelvintoFahrenheit(maxTemp)} F</h2>
    </Stat>
  );
};

export default Card;

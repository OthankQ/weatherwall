import { Input, Button, Flex } from '@chakra-ui/react';
import { getCoordByCityName } from '../../services/LocationService';
import { getCurrentWeatherByCoord } from '../../services/WeatherService';

import useWeatherStore from '../../useWeatherStore';

const Searchbar = () => {
  const searchTerm = useWeatherStore((state: any) => state.searchTerm);
  const cityName = useWeatherStore((state: any) => state.cityName);
  const setTemp = useWeatherStore((state: any) => state.setTemp);
  const setMinTemp = useWeatherStore((state: any) => state.setMinTemp);
  const setMaxTemp = useWeatherStore((state: any) => state.setMaxTemp);
  const setClouds = useWeatherStore((state: any) => state.setClouds);
  const setCityName = useWeatherStore((state: any) => state.setCityName);
  const setSearchTerm = useWeatherStore((state: any) => state.setSearchTerm);

  const handleSearchClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    const coord = await getCoordByCityName(searchTerm);
    const lat = coord[0].lat;
    const lon = coord[0].lon;

    const data = await getCurrentWeatherByCoord(lat, lon);

    console.log(data);

    setTemp(data.main.temp);
    setMinTemp(data.main.temp_min);
    setMaxTemp(data.main.temp_max);
    setClouds(data.weather[0].description);
    setCityName(data.name);
    setSearchTerm('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick(e as any);
    }
  };

  return (
    <Flex className="App" gap={2}>
      <Input
        type="text"
        onChange={handleInputChange}
        value={searchTerm}
        onKeyDown={handleEnterPress}
      />

      <Button onClick={handleSearchClick}>Search</Button>
    </Flex>
  );
};

export default Searchbar;

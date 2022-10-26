import { useContext } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

import { WeatherContextType } from '../../App';
import { WeatherContext } from '../../App';

const Searchbar = () => {
  const data: WeatherContextType = useContext(WeatherContext);

  return (
    <Flex className="App" gap={2}>
      <Input
        type="text"
        onChange={data.handleInputChange}
        value={data.cityName}
        onKeyDown={data.handleEnter}
      />

      <Button onClick={data.handleSearchClick}>Search</Button>
    </Flex>
  );
};

export default Searchbar;

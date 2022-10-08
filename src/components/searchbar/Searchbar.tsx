import { useContext } from 'react';
import { WeatherContextType } from '../../App';
import { WeatherContext } from '../../App';

const Searchbar = () => {
  const data: WeatherContextType = useContext(WeatherContext);

  return (
    <div className="App">
      <input
        type="text"
        onChange={data.handleInputChange}
        value={data.cityName}
        onKeyDown={data.handleEnter}
      />

      <button onClick={data.handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;

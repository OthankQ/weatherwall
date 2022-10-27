import create from 'zustand';

export type WeatherInfoType = {
  searchTerm: string;
  cityName: string;
  clouds: number;
  temp: number;
  minTemp: number;
  maxTemp: number;
};

const useWeatherStore = create((set) => ({
  searchTerm: '',
  ityName: '',
  clouds: 0,
  temp: 0,
  minTemp: 0,
  maxTemp: 0,
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setCityName: (cityName: string) => set({ cityName }),
  setClouds: (clouds: number) => set({ clouds }),
  setTemp: (temp: number) => set({ temp }),
  setMinTemp: (minTemp: number) => set({ minTemp }),
  setMaxTemp: (maxTemp: number) => set({ maxTemp }),
}));

export default useWeatherStore;

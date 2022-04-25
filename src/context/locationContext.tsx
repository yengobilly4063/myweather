import React, { createContext, useContext, useState } from "react";
import { getCityFromLocalStorage } from "../shared/helpers/location.helpers";
import { getWeatherFromLocalStorage } from "../shared/helpers/weather.helper";
import { City } from "../shared/types/city";
import { Weather } from "../shared/types/weather";

export const LocationContext = createContext({
  city: {} as City,
  setCity: (city: City) => {},
  weather: {} as Weather,
  setWeather: (weather: Weather) => {},
});

type Props = {
  children?: React.ReactNode;
};

export const useLocationContext = () => useContext(LocationContext);

export const LocationProvider = () => {};

const LocationContextProvider = ({ children }: Props) => {
  const [city, setCity] = useState<City>(getCityFromLocalStorage());
  const [weather, setWeather] = useState<Weather>(getWeatherFromLocalStorage());
  return <LocationContext.Provider value={{ city, weather, setCity, setWeather }}>{children}</LocationContext.Provider>;
};

export default LocationContextProvider;

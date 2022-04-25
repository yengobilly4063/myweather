import { Weather } from "../types/weather";
const currentWeather = "currentWeather";

const getWeatherFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(currentWeather) as string) as Weather;
};

const storeCurrentWeatherLocally = (weather: Weather) => {
  localStorage.setItem(currentWeather, JSON.stringify(weather));
};

export { getWeatherFromLocalStorage, storeCurrentWeatherLocally };

import { City } from "../types/city";
const currentCity = "currentCity";

const getCityFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(currentCity) as string) as City;
};

const storeCurrentCityLocally = (city: City) => {
  localStorage.setItem(currentCity, JSON.stringify(city));
};

export { getCityFromLocalStorage, storeCurrentCityLocally };

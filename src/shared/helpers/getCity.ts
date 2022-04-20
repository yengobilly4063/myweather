import axios from "axios";
import _env from "../../config/env";
const currentCity = "currentCity";

const getLocation = async () => {
  const { data } = await axios.get(_env.locationUrl);
  if (data) {
    const { city } = data;
    storeCurrentCityLocally(city);
  }
};

export const getCityFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(currentCity) as string);
};

const storeCurrentCityLocally = (city: string) => {
  localStorage.setItem(currentCity, JSON.stringify(city));
};

export { getLocation };

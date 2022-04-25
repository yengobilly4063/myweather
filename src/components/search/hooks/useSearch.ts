import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import _env from "../../../config/env";
import { City } from "../../../shared/types/city";
import { Weather } from "../../../shared/types/weather";
import { storeCurrentCityLocally } from "../../../shared/helpers/location.helpers";
import { storeCurrentWeatherLocally } from "../../../shared/helpers/weather.helper";
import useLocation from "../../../shared/hooks/useLocation";

const useSearch = () => {
  const [input, setInput] = useState<string>();
  const [error, setError] = useState("");
  const { city, setCity, setWeather } = useLocation();

  useEffect(() => {
    if (!city) {
      getGeolocationInfo();
      return;
    }
    getCurrentWeather(city);
  }, [city]);

  const handleSearchWeather = (event: any) => {
    if (!input) {
      setError("City name is required");
      return;
    }
    if (event.key === "Enter") {
      getCityInfo(input);
    }
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    clearErrors();
    const { value } = event?.currentTarget;
    setInput(value);
  };

  const getCityInfo = (city: string) => {
    const { weatherLocationUrl, weatherAppId } = _env;
    axios
      .get(`${weatherLocationUrl}?q=${city}&appid=${weatherAppId}`)
      .then((data) => {
        const {
          name,
          sys: { sunrise, sunset },
          coord: { lat, lon },
        } = data.data;
        const newCity: City = { name, lat, lon, sunrise, sunset };
        setCity(newCity);
        storeCurrentCityLocally(newCity);
        getCurrentWeather(newCity);
      })
      .catch((error) => {
        setError("City not found!");
      });
  };

  const getGeolocationInfo = async () => {
    const { data } = await axios.get(_env.locationUrl);
    if (data) {
      const { city, latitude: lat, longitude: lon } = data;
      getCityInfo(city);
    }
  };

  const getCurrentWeather = (city: City) => {
    const { weatherApiUrl: baseUrl, weatherAppId } = _env;
    const { lat, lon } = city;
    const requestUrl = `${baseUrl}?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${weatherAppId}`;
    axios.get(requestUrl).then((data) => {
      const { daily, current } = data.data;
      const newWeatherInfo: Weather = { daily, current };
      storeCurrentWeatherLocally(newWeatherInfo);
      setWeather(newWeatherInfo);
    });
  };

  const clearErrors = () => {
    setError("");
  };

  return { handleSearchWeather, handleInputChange, error, setError, getCityInfo, city };
};

export default useSearch;

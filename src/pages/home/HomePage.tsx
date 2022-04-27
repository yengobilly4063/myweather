import React from "react";
import MainLayout from "../../components/layouts/main-layout/MainLayout";
import Search from "../../components/search/Search";
import Weather from "../../components/weather/Weather";
import TemperatureContextProvider from "../../context/temperatureContext";
import useWeather from "../../shared/hooks/useWeather";

const HomePage: React.FC = () => {
  const { weather } = useWeather();
  return (
    <TemperatureContextProvider>
      <MainLayout>
        <Search />
        {weather && <Weather />}
      </MainLayout>
    </TemperatureContextProvider>
  );
};

export default HomePage;

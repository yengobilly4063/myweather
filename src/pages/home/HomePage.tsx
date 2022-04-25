import React, { useEffect } from "react";
import MainLayout from "../../components/layouts/main-layout/MainLayout";
import Search from "../../components/search/Search";
import Weather from "../../components/weather/Weather";
import useLocation from "../../shared/hooks/useLocation";

const HomePage: React.FC = () => {
  const { city } = useLocation();
  useEffect(() => {
    console.log("changhed: ", city);
  }, [city]);
  return (
    <MainLayout>
      <Search />
      <Weather />
    </MainLayout>
  );
};

export default HomePage;

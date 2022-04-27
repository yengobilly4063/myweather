import useLocation from "./useLocation";

const useWeather = () => {
  const { weather } = useLocation();

  return { weather };
};

export default useWeather;

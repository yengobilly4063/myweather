import { useLocationContext } from "../../context/locationContext";

const useLocation = () => {
  const { city, weather, setCity, setWeather } = useLocationContext();
  return { city, weather, setCity, setWeather };
};

export default useLocation;

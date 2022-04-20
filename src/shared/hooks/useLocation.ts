import { useEffect, useState } from "react";
import { getCityFromLocalStorage, getLocation } from "../helpers/getCity";

const useLocation = () => {
  const [city, _] = useState<string>(getCityFromLocalStorage());

  useEffect(() => {
    if (!city) {
      getLocation();
    }
  });

  return { city };
};

export default useLocation;

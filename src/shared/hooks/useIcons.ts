import { IconOptions } from "../types/icons";

const useIcons = () => {
  const getIconText = (desc: string) => {
    switch (desc) {
      case IconOptions.CLEAR:
        return "wi-day-sunny";
      case IconOptions.CLOUDS:
        return "wi-cloudy";
      case IconOptions.RAIN:
        return "wi-raindrops";
    }
  };
  return { getIconText };
};

export default useIcons;

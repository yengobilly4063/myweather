import { IconOptions } from "../types/icons";

const useIcons = () => {
  const getIconText = (desc: string) => {
    switch (desc) {
      case IconOptions.CLEAR:
        return "wi-day-sunny";
      case IconOptions.CLOUDS:
        return "wi-cloud";
      case IconOptions.RAIN:
        return "wi-sprinkle";
      case IconOptions.SNOW:
        return "wi-snow";
      default:
        return "wi-alien";
    }
  };
  return { getIconText };
};

export default useIcons;

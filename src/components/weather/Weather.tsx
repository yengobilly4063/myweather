import { useEffect } from "react";
import useLocation from "../../shared/hooks/useLocation";
import CurrentWeather from "./current/CurrentWeather";
import DailyWeather from "./daily/DailyWeather";
import styles from "./Weather.module.scss";
const Weather = () => {
  const { city, weather } = useLocation();
  if (!weather) {
    return null;
  }

  const { current, daily } = weather;

  return (
    <div className={styles.wrapper}>
      {current && <CurrentWeather current={current} />}
      {daily?.length && <DailyWeather />}
    </div>
  );
};

export default Weather;

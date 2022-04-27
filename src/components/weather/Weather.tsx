import useWeather from "../../shared/hooks/useWeather";
import CurrentWeather from "./current/CurrentWeather";
import DailyWeather from "./daily/DailyWeather";
import styles from "./Weather.module.scss";
const Weather = () => {
  const { weather } = useWeather();
  const { current, daily } = weather;

  return (
    <div className={styles.wrapper}>
      {current && <CurrentWeather current={current} />}
      {daily?.length > 0 && <DailyWeather daily={daily} />}
    </div>
  );
};

export default Weather;

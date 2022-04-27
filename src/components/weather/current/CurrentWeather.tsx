import { FC } from "react";
import useIcons from "../../../shared/hooks/useIcons";
import useLocation from "../../../shared/hooks/useLocation";
import { ICurrentWeather } from "../../../shared/types/weather";
import Temperature from "../../temperature/Temperature";
import styles from "../../weather/Weather.module.scss";
type Props = {
  current: ICurrentWeather;
};

const CurrentWeather: FC<Props> = ({ current }) => {
  const { getIconText } = useIcons();
  const { city } = useLocation();
  return (
    <>
      <h1 className={styles.city}>{city.name}</h1>
      <div className={styles.content}>
        <i className={`wi ${getIconText(current.weather[0].main)} ${styles.icon}`}></i>
        <div className={styles.info}>
          <div className={styles.temp}>
            <Temperature value={current.temp} />
          </div>
          <div className={styles.feels}>
            <span>Feels like </span>
            <Temperature value={current.feels_like} />
          </div>
        </div>
        <p className={styles.date}>Today</p>
      </div>
    </>
  );
};

export default CurrentWeather;

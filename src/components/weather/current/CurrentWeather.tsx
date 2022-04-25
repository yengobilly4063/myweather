import { FC } from "react";
import { ICurrentWeather } from "../../../shared/types/weather";
import Temparature from "../../temparature/Temparature";
import styles from "./CurrentWeather.module.scss";
type Props = {
  current: ICurrentWeather;
};

const CurrentWeather: FC<Props> = ({ current }) => {
  return (
    <div className={styles.wrapper}>
      <i className="wi wi-night-sleet"></i>
      <div className={styles.info}>
        <div className={styles.temp}>
          <Temparature value={current.temp} />
        </div>
        <div className={styles.feels}>
          <span>Feels like </span>
          <Temparature value={65} />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

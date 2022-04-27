import React, { FC } from "react";
import useDate from "../../../shared/hooks/useDate";
import useIcons from "../../../shared/hooks/useIcons";
import { DailyWeatherInfo } from "../../../shared/types/weather";
import Temperature from "../../temperature/Temperature";
import styles from "../../weather/Weather.module.scss";

type Props = {
  daily?: DailyWeatherInfo[];
};

const DailyWeather: FC<Props> = ({ daily }) => {
  const { getDateText } = useDate();
  const { getIconText } = useIcons();
  return (
    <div className={styles.daily}>
      <h1>Future Daily Forcast</h1>
      {daily?.map((item, index) => (
        <div className={styles.content} key={index}>
          <i className={`wi ${getIconText(item.weather[0].main)} ${styles.icon}`}></i>
          <div className={styles.info}>
            <div className={styles.temp}>
              <Temperature value={item.temp.day} />
            </div>
            <div className={styles.feels}>
              <span>Feels like </span>
              <Temperature value={item.feels_like?.day} />
            </div>
          </div>
          <div className={styles.date}>{getDateText(item.sunrise)}</div>
        </div>
      ))}
    </div>
  );
};

export default DailyWeather;

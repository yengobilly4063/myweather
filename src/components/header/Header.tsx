import React from "react";
import styles from "./Header.module.scss";
import Container from "../container/Container";
import weatherLogo from "../../assets/weather.jpg";
import { Link } from "react-router-dom";
import useTemperatureMetric from "../../shared/hooks/useTemperatureMetric";
const Header: React.FC = () => {
  const { handleToggleMetric } = useTemperatureMetric();
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            <img className={styles.imgl} src={weatherLogo} alt="My Weather" />
            <span>MyWeather</span>
          </Link>
          <span className={styles.toggle} onClick={handleToggleMetric}>
            F/<sup>o</sup>C
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Header;

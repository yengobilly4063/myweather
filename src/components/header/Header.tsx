import React from "react";
import styles from "./Header.module.scss";
import Container from "../container/Container";
import weatherLogo from "../../assets/weather.jpg";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Link to="/" className={styles.logo}>
          <img className={styles.imgl} src={weatherLogo} alt="My Weather" />
          <span>MyWeather</span>
        </Link>
      </Container>
    </div>
  );
};

export default Header;

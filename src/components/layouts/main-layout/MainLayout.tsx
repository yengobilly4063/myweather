import React, { ReactNode } from "react";
import Container from "../../container/Container";
import Header from "../../header/Header";
import styles from "./MainLayout.module.scss";

interface IProps {
  children?: ReactNode;
}
const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <Container>
        <div className={styles.children}>{children}</div>
      </Container>
    </div>
  );
};

export default MainLayout;

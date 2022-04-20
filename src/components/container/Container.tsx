import React, { ReactNode } from "react";
import useScreen from "../../shared/hooks/useScreen";
import styles from "./Container.module.scss";

interface IProps {
  children?: ReactNode;
}
const Container: React.FC<IProps> = ({ children }) => {
  const { isDesktop } = useScreen();
  const containerWidth = isDesktop ? 80 : 100;

  return (
    <div className={styles.container} style={{ width: `${containerWidth}%` }}>
      {children}
    </div>
  );
};

export default Container;

import React from "react";
import styles from "./Container.module.scss";

type TContainer = {
  children: React.ReactNode;
};

const Container = ({ children }: TContainer) => {
  return <div className={styles.base}>{children}</div>;
};

export default Container;

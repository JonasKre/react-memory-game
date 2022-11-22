import React from "react";
import styles from "./Grid.module.scss";

type TGrid = { children: React.ReactNode };

const Grid = ({ children }: TGrid) => {
  return <div className={styles.base}>{children}</div>;
};

export default Grid;

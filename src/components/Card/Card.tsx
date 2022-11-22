import React from "react";
import styles from "./Card.module.scss";
import classnames from "classnames";

type TCard = {
  isFlipped: boolean;
  icon: React.ReactNode;
  handleClick: () => void;
};

const Card = ({ isFlipped, handleClick, icon }: TCard) => {
  return (
    <div
      className={classnames(styles.base, { [styles.flipped]: isFlipped })}
      onClick={handleClick}
    >
      <div className={styles.inner}>
        <div className={styles.front} />
        <div className={styles.back}>{isFlipped && icon}</div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import styles from "./Modal.module.scss";
import classnames from "classnames";

type TModal = { isVisible: boolean; children: React.ReactNode };

const Modal = ({ isVisible, children }: TModal) => {
  return (
    <div className={classnames(styles.base, { [styles.visible]: isVisible })}>
      <div className={styles.modal}>{children}</div>
      <div className={styles.backdrop} />
    </div>
  );
};

export default Modal;

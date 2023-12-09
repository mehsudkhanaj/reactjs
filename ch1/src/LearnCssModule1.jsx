import React from 'react';
import styles from "../css/LearnCssModule.module.css";

export const LearnCssModule1 = () => {
  return (
    <>
      <p className={`${styles.txt_size}`}>This is CSS Module1</p>
    </>
  );
}

import styles from "./keyword.module.css";
import React from "react";

export default function Keyword({ keyword, handleClick, isX = false }) {
  return (
    <div className={styles.keyword_edit} onClick={() => handleClick(keyword)}>
      { isX && <span className={styles.remove} >X</span>}
      <span className={styles.content}>{keyword}</span>
    </div >
  );
}

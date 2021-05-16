import styles from "./Headline.module.css";
import React from "react";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page}</h1>
      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
}

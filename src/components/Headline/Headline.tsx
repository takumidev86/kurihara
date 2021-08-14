import styles from "./Headline.module.css";
import React from "react";

export function Headline(props) {
  return (
    <div>
      {/* <h1 className={styles.title}>{props.page}</h1>
      <p className={styles.description}>
        Get started by editing {props.children}
      </p> */}
      <h1 className="m-0 text-5xl capitalize text-center mb-6">{props.page}</h1>
      <p className="text-2xl text-center">
        Get started by editing {props.children}
      </p>
    </div>
  );
}

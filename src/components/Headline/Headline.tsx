import styles from "./Headline.module.css";
import React from "react";

export function Headline(props) {
  return (
    <div>
      <h1 className="m-0 leading-5 text-6xl capitalize text-center leading-snug">
        {props.page}
      </h1>
      <p className="leading-5 text-center text-2xl leading-snug">
        Get started by editing {props.children}
      </p>
    </div>
  );
}

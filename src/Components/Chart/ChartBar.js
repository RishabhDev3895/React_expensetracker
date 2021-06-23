import React from "react";
import styles from "./ChartBar.module.css";

function ChartBar(props) {
  let barFillHeight = "0%";
  debugger;
  if (props.max != 0) {
    barFillHeight = Math.round((props.value / props.max) * 100) + "%";
  }

  return (
    <div className={styles.chartbar}>
      <div className={styles.chartbar__inner}>
        <div
          className={styles.chartbar__fill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles.chartbar__label}>{props.label}</div>
    </div>
  );
}

export default ChartBar;

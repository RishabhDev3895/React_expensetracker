import React from "react";
import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  // debugger;
  const dataPointValues = props.chartData.map((itmData) => itmData.value);
  const totalMaximum = Math.max(...dataPointValues);

  //   const renderChartbars = () => {
  //     props.chartData.map((i) => (
  //       <ChartBar
  //         key={i.label}
  //         label={i.label}
  //         value={i.value}
  //         max={totalMaximum}
  //       />
  //     ));
  //   };

  return (
    <div className={styles.chart}>
      {props.chartData.map((i) => (
        <ChartBar
          key={i.label}
          label={i.label}
          value={i.value}
          max={totalMaximum}
        />
      ))}
    </div>
  );
}

export default Chart;

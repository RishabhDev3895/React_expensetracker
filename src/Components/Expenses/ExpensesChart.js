import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.items.map((i) => {
    const month = i.date.getMonth(); //Jan==>0 to Dec=>11
    dataPoints[month].value += i.amount;
  });
  console.log(dataPoints);
  return <Chart chartData={dataPoints} />;
}
export default ExpensesChart;

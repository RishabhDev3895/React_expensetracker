import React, { useState } from "react";
import "../../App.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const item = props.item;
  const date = item.date.toDateString();
  return (
    <Card className="expense">
      <div className="expenseDate">{date}</div>
      <div className="expenseText">
        <h3>{item.title}</h3>
      </div>
      <div className="expenseCost">Rs {item.amount}</div>
    </Card>
  );
}

export default ExpenseItem;

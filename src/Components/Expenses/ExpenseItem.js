import React, { useState } from "react";
import "../../App.css";
import Card from "../UI/Card";

function Expense(props) {
  const item = props.item;
  const [title, setTitle] = useState(item.expenseText);

  // handler function
  const handleClick = () => {
    setTitle("Updated Title");
    //console.log(title);
  };
  return (
    <Card className="expense">
      <div className="expenseDate">{item.date.toDateString()}</div>
      <div className="expenseText">
        <h3>{title}</h3>
      </div>
      <div className="expenseCost">Rs {item.amount}</div>
      <div>
        <button onClick={handleClick}>Change Title</button>
      </div>
    </Card>
  );
}

export default Expense;

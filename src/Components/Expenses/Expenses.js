import React, { useState } from "react";
import "../../App.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const expenseItems = props.items;
  const [filterYear, setFilterYear] = useState("2021");

  const handleFilterChange = (year) => {
    console.log("Filter by year:", filterYear);
    setFilterYear(year);
  };

  const filteredExpenses = expenseItems.filter(
    (item) => item.date.getFullYear().toString() == filterYear
  );

  const renderExpenses = () => {
    return filteredExpenses.length == 0 ? (
      <p
        style={{
          color: "whitesmoke",
          margin: "20px 20px 20px 20px",
          textAlign: "center",
        }}
      >
        No Expenses found!
      </p>
    ) : (
      filteredExpenses.map((m) => <ExpenseItem key={m.id} item={m} />)
    );
  };

  return (
    <Card className="expensebody">
      <ExpenseFilter selected={filterYear} onFilter={handleFilterChange} />
      {renderExpenses()}
    </Card>
  );
}

export default Expenses;

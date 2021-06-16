import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "../../App.css";

const NewExpense = (props) => {
  const handleSave = (newExp) => {
    const expenseData = {
      id: (Math.random().toPrecision(1) * 10).toString(),
      ...newExp,
    };
    // console.log("In NewExpense.js", expenseData);
    props.onAddition(expenseData);
  };
  return (
    <Card className="expensebody">
      <ExpenseForm onSaveExpenseData={handleSave} />
    </Card>
  );
};

export default NewExpense;

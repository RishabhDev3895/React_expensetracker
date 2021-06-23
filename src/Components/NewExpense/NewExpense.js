import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "../../App.css";

const NewExpense = (props) => {
  //let isAddClicked= false;
  const [isAddClicked, setAddClick] = useState(false);

  const handleSave = (newExp) => {
    const expenseData = {
      id: (Math.random().toPrecision(1) * 10).toString(),
      ...newExp,
    };
    // console.log("In NewExpense.js", expenseData);
    props.onAddition(expenseData);
  };

  const handleAddition = () => {
    setAddClick(true);
  };
  const handleCancel = () => {
    setAddClick(false);
  };

  const renderNewExpense = isAddClicked ? (
    <ExpenseForm onSaveExpenseData={handleSave} onCancelClick={handleCancel} />
  ) : (
    <button
      className="input expenseCost"
      type="button"
      onClick={handleAddition}
    >
      Add New Expense
    </button>
  );
  return <Card className="expensebody">{renderNewExpense}</Card>;
};

export default NewExpense;

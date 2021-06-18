import "./App.css";
import logo from "./logo.svg";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { expenseItems } from "./Data/expenses";
import { useState } from "react";

function App() {
  let expensesList = expenseItems;
  const [expenses, setExpenseItems] = useState(expensesList);

  const handleNewExpense = (newExpense) => {
    console.log("Updated Expense Items", expenses);
    setExpenseItems((prevState) => {
      return [newExpense, ...prevState];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Expense Tracker App</p>
      </header>
      <NewExpense onAddition={handleNewExpense} />
      <Expenses items={expenses} />
      <footer className="App-footer">
        <p>Created By: Maverick</p>
        <p>© Copyright 2021. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import logo from "./logo.svg";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { expenseItems } from "./Data/expenses";
import { useState } from "react";

function App() {
  const expensesList = expenseItems;
  const [expenses, setExpenseItems] = useState(expenseItems);

  const handleNewExpense = (newExpense) => {
    expensesList.push(newExpense);
    console.log("Updated Expense Items", expenseItems);
    setExpenseItems(expensesList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Expense Tracker App</p>
      </header>
      <NewExpense onAddition={handleNewExpense} />
      <Expenses items={expensesList} />
      <footer className="App-footer">
        <p>Created By: Maverick</p>
        <p>© Copyright 2021. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

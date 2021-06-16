import React, { useState } from "react";
import Card from "../UI/Card";

function ExpenseForm(props) {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  // const [amount, setAmount] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    date: "",
    amount: "",
  });

  const handleChange = (e) => {
    const inputType = e.target.type;
    if (inputType == "text")
      setUserInput((prevState) => {
        return { ...prevState, title: e.target.value };
      });
    else if (inputType == "date")
      setUserInput((prevState) => {
        return { ...prevState, date: e.target.value };
      });
    else
      setUserInput((prevState) => {
        return { ...prevState, amount: e.target.value };
      });
  };

  // const handleChange = (e) => {
  //   const inputType = e.target.type;
  //   if (inputType == "text") setTitle(e.target.value);
  //   else if (inputType == "date") setDate(e.target.value);
  //   else setAmount(e.target.value);
  // };

  // const handleDateChange = (e) => {};

  // const handleAmountChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newExpenseItem = {
    //   id: 6,
    //   expenseDate: new Date(date),
    //   expenseText: title,
    //   expenseCost: amount,
    // };
    props.onSaveExpenseData(userInput);
    //console.log("In ExpenseForm.js", userInput);
    setUserInput({ title: "", date: "", amount: "" });
    // setTitle("");
    // setDate("");
    // setAmount("");
  };

  return (
    <Card className="expense">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="">Title</label>
          <input
            className="input"
            type="Text"
            value={userInput.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className="">Date</label>
          <input
            className="input"
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label className="">Amount</label>
          <input
            className="input"
            type="number"
            min="10"
            step="1"
            value={userInput.amount}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button className="input expenseCost" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </Card>
  );
}

export default ExpenseForm;

import React from "react";
import Card from "../UI/Card";

function ExpenseForm() {
  return (
    <Card className="expense">
      <form>
        <div>
          <label className="">Title</label>
          <input className="input" type="Text"></input>
        </div>
        <div>
          <label className="">Date</label>
          <input
            className="input"
            type="date"
            min="2020-01-01"
            max="2022-12-31"
          ></input>
        </div>

        <div>
          <label className="">Amount</label>
          <input className="input" type="number" min="10" step="1"></input>
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

import React from "react";
import "../../App.css";

function ExpenseFilter(props) {
  const handleChange = (e) => {
    //console.log(e.target);
    props.onFilter(e.target.value);
  };

  return (
    <div className="expense-filter">
      <label>Select Expenses by Year</label>
      &nbsp;
      <select id="year" defaultValue={props.selected} onChange={handleChange}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;

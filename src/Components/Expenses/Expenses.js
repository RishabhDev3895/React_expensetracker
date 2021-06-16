import "../../App.css";
import Expense from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const expenseItems = props.items;
  return (
    <Card className="expensebody">
      {expenseItems.map((m) => (
        <Expense key={m.id} item={m} />
      ))}
    </Card>
  );
}

export default Expenses;

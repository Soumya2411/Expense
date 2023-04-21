import "./Expenses.css";
import React, { useState } from "react";
import ExpenseItem  from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {

  function Expenses(props) {
    const onExpenseFilterValue = (expenseFilterData) => {
      const expenseFilterVal = expenseFilterData;
      console.log(expenseFilterVal);
    };
    return (
      <Card className="expenses">
        <div>
          <ExpensesFilter onFilter={onExpenseFilterValue} />
        </div>
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expense[1].title}
          amount={props.expense[1].amount}
          date={props.expense[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expense[2].title}
          amount={props.expense[2].amount}
          date={props.expense[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expense[3].title}
          amount={props.expense[3].amount}
          date={props.expense[3].date}
        ></ExpenseItem>
      </Card>
    );
  }
}
export default Expenses;
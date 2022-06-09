import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description"></div>
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

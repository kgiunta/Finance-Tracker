import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"></div>
      <h2>{title}</h2>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
}

export default ExpenseItem;

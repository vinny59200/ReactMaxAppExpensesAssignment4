import Card from "../UI/Card";
import React from "react";
import {useState} from 'react'
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseItem.css';
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [enteredYear, setEnteredYear] = useState('');
    const [expensesArray,setExpensesArray] = useState(props.expenses);
    const yearHandler = (enteredYear) => {
        setEnteredYear(enteredYear);
        setExpensesArray(props.expenses.filter(expense=>expense.date.getFullYear() == enteredYear))
    }

    return (<div>
        <ExpenseFilter onSelectYear={yearHandler}></ExpenseFilter>
        <Card className="expenses">
            <ExpensesList expenses={expensesArray}/>
        </Card>
    </div>);
}

export default Expenses;
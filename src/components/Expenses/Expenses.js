import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";
import {useState} from 'react'
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseItem.css';

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
            {expensesArray.map(exp => (
                <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id} />
            ))}
        </Card>
    </div>);
}

export default Expenses;
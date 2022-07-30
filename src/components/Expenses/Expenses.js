import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";
import {useState} from 'react'
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseItem.css';

function Expenses(props) {
    const [enteredYear, setEnteredYear] = useState('');
    const yearHandler = (enteredYear) => {
        setEnteredYear(enteredYear);
        console.log(enteredYear)
        props.onFilteredYear(enteredYear)
    }
    return (<div>
        <ExpenseFilter onSelectYear={yearHandler}></ExpenseFilter>
        <Card className="expenses">
            {props.expenses.map(exp => (
                <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id} />
            ))}
        </Card>
    </div>);
}

export default Expenses;
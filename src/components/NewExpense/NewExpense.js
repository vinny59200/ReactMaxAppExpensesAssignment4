import React from "react";
import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const onClick = () => setIsDisplayed(true)
    const onCancel= () => setIsDisplayed(false)
    const saveExpenseHandler = (enteredExpenseData) => {
        props.onAddExpense(enteredExpenseData);
        setIsDisplayed(false)
    }

    let newExpenseContent = <div className="new-expense"><button onClick={onClick}>Add new Expense</button></div>;

    if (!isDisplayed) return newExpenseContent;

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={onCancel}/>
    </div>

};

export default NewExpense;
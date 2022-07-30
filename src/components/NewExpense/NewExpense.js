import React from "react";
import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import * as R from "ramda";

const NewExpense = (props) => {
    const [useExpenseData, setUseExpenseData] = useState('');
    const [isDisplayed, setIsDisplayed] = useState(false);
    const onClick = () => setIsDisplayed(true)
    const saveExpenseHandler = (enteredExpenseData) => {
        console.log('VV123')
        console.log("vv0"+enteredExpenseData.title)
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("vv1"+expenseData.title)
        console.log("vv2"+useExpenseData.title)
        setUseExpenseData(expenseData);
        console.log("vv3"+useExpenseData.title)
        if(!checkZ(expenseData.title)&&!checkZ(expenseData.amount))props.onAddExpense(expenseData);
        setIsDisplayed(false)
    }

    let newExpenseContent = <div className="new-expense"><button onClick={onClick}>Add new Expense</button></div>;

    if (!isDisplayed) return newExpenseContent;

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>

};

function checkZ(str) {
    return R.isNil(str) || R.isEmpty(str);
}

export default NewExpense;
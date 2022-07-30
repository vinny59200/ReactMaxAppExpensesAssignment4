import React from "react";
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {
    let expensesContent = <p>No expenses content.</p>;
    if(props.expenses.length===0) return expensesContent;
    return (<ul className="expenses-list">
        {props.expenses.map(exp => (
           <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id} />
        ))}
    </ul>);
};

export default ExpensesList
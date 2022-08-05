import Card from "../UI/Card";
import React from "react";
import {useState} from 'react'
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseItem.css';
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    // const [enteredYear, setEnteredYear] = useState('2022');
    // const [expensesArray,setExpensesArray] = useState(props.expenses);
    // const yearHandler = (enteredYear) => {
    //     setEnteredYear(enteredYear);
    //     setExpensesArray(props.expenses.filter(expense=>expense.date.getFullYear() == enteredYear))
    // }

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
  
    const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    // return (<div>
    //     <ExpenseFilter onSelectYear={yearHandler}></ExpenseFilter>
    //     <Card className="expenses">
    //         <ExpensesList expenses={expensesArray}/>
    //     </Card>
    // </div>);

return (<div>
     <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
    <Card className="expenses">
    <ExpensesList expenses={filteredExpenses} />
    </Card>
</div>);
}

export default Expenses;
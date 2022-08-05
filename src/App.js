import ExpenseItem from './components/Expenses/ExpenseItem';
import './components/Expenses/ExpenseItem.css'
import './App.css';
import React from "react";
import { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'
import * as R from "ramda";
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Shirts',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'Udemy courses', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Year transport fee',
    amount: 512.50,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Mic (Gamer)',
    amount: 150,
    date: new Date(2022, 5, 12),
  },
];



function App() {

  const [enteredExpenses, setEnteredExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setEnteredExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={enteredExpenses} ></Expenses>
      </header>
    </div>
  );
}


export default App;

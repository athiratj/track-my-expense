import React, {useState} from 'react'; 
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const default_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2016, 11, 17),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(default_expenses);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];

    });
  }

  console.log(expenses);

  return (
    <div className="App">
      <NewExpense onAddExpense ={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

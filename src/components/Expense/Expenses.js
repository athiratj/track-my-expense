import React, {useState} from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectedYear = (year) =>{
        setFilteredYear(year);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onSelectYear={selectedYear}/>
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );

}

export default Expenses;
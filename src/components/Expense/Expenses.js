import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

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
                {filteredExpenses.map((expense)=>{
                    return(
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                    );})
                }
            </Card>
        </div>
    );

}

export default Expenses;
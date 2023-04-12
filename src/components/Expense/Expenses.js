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

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onSelectYear={selectedYear}/>
                {props.items.map((expense)=>{
                    return(
                        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
                    );
                })}
            </Card>
        </div>
    );

}

export default Expenses;
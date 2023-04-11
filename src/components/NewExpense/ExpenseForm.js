import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredPrice: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, enteredPrice: event.target.value};
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // });
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            price : enteredPrice,
            date : new Date (enteredDate),
        };
        console.log(expenseData);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-12-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;

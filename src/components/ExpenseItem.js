import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){

    return(
        <div className='expense-item'>
            {/* Error occured for date solved: https://bobbyhadz.com/blog/react-objects-are-not-valid-as-react-child */}
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
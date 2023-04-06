import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props){

    return(
        <div className='expense-item'>
            {/* Error occured for date solved: https://bobbyhadz.com/blog/react-objects-are-not-valid-as-react-child */}
            <div>{props.date.toLocaleDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
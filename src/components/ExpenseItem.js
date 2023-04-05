import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(){

    return(
        <div className='expense-item'>
            <div>April 5, 2023</div>
            <div className='expense-item__description'>
                <h2>Hair Oil</h2>
                <div className='expense-item__price'>180</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){

    return(
        <li>
            <Card className='expense-item'>
            {/* Error occured for date solved: https://bobbyhadz.com/blog/react-objects-are-not-valid-as-react-child */}
            <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
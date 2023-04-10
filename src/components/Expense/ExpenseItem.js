import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    }

    return(
        <Card className='expense-item'>
            {/* Error occured for date solved: https://bobbyhadz.com/blog/react-objects-are-not-valid-as-react-child */}
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Item</button>
        </Card>
    );
}

export default ExpenseItem;
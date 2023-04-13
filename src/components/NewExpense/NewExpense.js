import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const [addExpense, setAddExpense] = useState(false);

    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            id : crypto.randomUUID(),
            ...inputExpenseData,
        };
        props.onAddExpense(expenseData)
    }

    const addNewExpenseHandler = () => {
        setAddExpense(true);
    }

    const stopEditingHandler = () => {
        setAddExpense(false);
    }

    return(
        <div>
            <div className="new-expense">
                {!addExpense ? <button onClick={addNewExpenseHandler} >Add New Expense</button> : 
                addExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
            </div>
    </div>
    );
}

export default NewExpense;
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({items}){
    return(
        <div className="expenses">
            {items.map((expense)=>{
                return(
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
                );
            })}

        </div>
    );

}

export default Expenses;
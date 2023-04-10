import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

function Expenses({items}){
    return(
        <Card className="expenses">
            {items.map((expense)=>{
                return(
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
                );
            })}

        </Card>
    );

}

export default Expenses;
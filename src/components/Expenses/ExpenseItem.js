import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import React from 'react';
import Card from '../UI/Card'
function ExpenseItem(props){
    
    return(
        <Card className='expense-item'>
       <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
</div>
<button onClick={()=> {console.log('clicked')}}>Change Title</button>
</Card>
);
}
export default ExpenseItem;
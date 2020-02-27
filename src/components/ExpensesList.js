import React from 'react';
import {connect} from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectedExpenses from '../selectors/expenses';

const ExpensesList = (props) => (
    <div className="list">
        <h3> This is expenses list</h3>
        {props.expenses.map((expense)=> {
            return <ExpensesListItem key={expense.id} expense={expense}/>
        })}
       
    </div>
);
const mapStatetoProps= (state)=>{
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}
const ConnectedExpensesList = connect(mapStatetoProps)(ExpensesList); //HOC

export default ConnectedExpensesList;
import React from 'react';
import { removeExpense } from '../actions/expenses';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
/*
Remove button:
- Handle event on click with remove button
- call dispatch() and import action removeExpense(id)
- connect to store
*/



const ExpensesListItem = (props) => (
    <div>
        <p>Description: {props.expense.description} - Amount: {props.expense.amount} - CreatAt: {props.expense.createdAt} <Link to={`/edit/${props.expense.id}`}>Edit</Link>
        <button onClick={()=>props.dispatch(removeExpense(props.expense.id))}>Remove</button></p>
    </div>
);

export default connect()(ExpensesListItem);
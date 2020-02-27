import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from'react-redux';
import {addExpense} from '../actions/expenses';



/*
- create a new component name: ExpenseForm.js
- form includes: input type ="text",name="description" ,input type ="float" name ="amount", button type="submit"
- connect to store, import addExpenses from action store
- handle event form onSubmit; e.preventDefault(); props.dispatch(addExpense({description: e.target.description.value,amount:e.target.amount.value})(e.target.name-input.value))
- return dashboard page
*/

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        console.log(expense);
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);

import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { tsPropertySignature } from '@babel/types';
import {editExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props.expense);
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={expenseEdited =>{
          //console.log(expenseEdited)
          props.dispatch(editExpense(props.expense.id, expenseEdited));
          props.history.push("/");
        }}/>
    </div>
  );
};
//viet ham mapsatetoprops
const mapStateToProps = (state, props) => {

  return {
    expense: state.expenses.find(expense => expense.id === parseInt(props.match.params.id))
  };
};

//connect to store and check id, if it exists => show information

export default connect(mapStateToProps)(EditExpensePage);

import React from 'react';

import ExpensesList from './ExpensesList';

import ExpensesListFilters from './ExpensesListFilters';

const ExpensesListDashboard = () => (
    <div>
        <ExpensesList/>
        <ExpensesListFilters/>
    </div>
);

export default ExpensesListDashboard;

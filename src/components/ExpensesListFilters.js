import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';



/*
Import sort by Date and sort by Amount
handle event on change
dispatch, check condition
*/

const ExpensesListFilters = (props) => {
    return (
        <div className="filter">
            <input type="text" value={props.filter.text} onChange={(e)=>{
                props.dispatch(setTextFilter(e.target.value));
            }}
            />
            <select 
                onChange={e=>{
                    if (e.target.value === "amount"){
                        props.dispatch(sortByAmount())
                    }else if (e.target.value ==="date"){
                        props.dispatch(sortByDate())
                    };
                }}
                value = {props.filter.sortBy}
                >
                <option value ="---"></option>
                <option value ="amount">By amount</option>
                <option value ="date">By date</option>

            </select>
        </div>
    )
};
const mapStatetoProps = (state) => {
    return {
        filter: state.filters
    }
}


export default connect(mapStatetoProps)(ExpensesListFilters);
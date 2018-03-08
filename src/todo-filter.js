import React, {Component} from 'react';
import './App.css';

const TodoFilter = (props) => {

    return (
        <div className="filters">
            <span>Count : {props.todoList.length} {props.todoList.length > 1 ? 'items': 'item'}</span>
            <span onClick={() => {
                props.updateFilter(null)
            }} >All</span>
            <span onClick={() => {
                props.updateFilter(false)
            }} >Active</span>
            <span onClick={() => {
                props.updateFilter(true)
            }} >Completed</span>
        </div>
    );

}

export default TodoFilter;
import React from 'react';
import './item-add.css';

export default function ItemAdd(props) {
    const { onInputTextChange, value, onItemAdd } = props;
    return(
        <form
            className = 'item-add d-flex'
            onSubmit = {(e) => e.preventDefault()}
        >

            <input type = 'text'
                   className = 'form-control'
                   onChange = {(e) => onInputTextChange(e.target.value)}
                   placeholder = 'Write your new task here'
                   value = {value} />
            <button
                onClick = {onItemAdd.bind(null, value)}>Add</button>
        </form>
    )
}


import React from 'react';
import './El-search.css';

export default function ElSearch(props) {
    const { onInputTextChange, value } = props;
    return (
        <input type = 'text'
               className = 'form-control search-input'
               placeholder = 'type to search'
               value={value}
               onChange={(e) => onInputTextChange(e.target.value)}
        />
    );
};

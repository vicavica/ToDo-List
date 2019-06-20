import React from 'react';

import './El-filter-status.css';

export default class ElFilterStatus extends React.Component {
    buttons = [
        {name: 'All', label: 'All'},
        {name: 'In Progress', label: 'In Progress'},
        {name: 'Done', label: 'Done'}
    ];

    render() {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = (filter === name);
            const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
            return(
                <button type='button' className= {`btn ${btnClass}`} key = {name}
                                      onClick = {() => onFilterChange(name)}>{label}</button>
            );
        });

        return (
            <div className='btn-group'>
               {buttons}
            </div>
        );
    }
}

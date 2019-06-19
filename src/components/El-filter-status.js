import React from 'react';

import './El-filter-status.css';

export default class ElFilterStatus extends React.Component {
    render() {
        return (
            <div className='btn-group'>
                <button type='button'
                        className='btn btn-info'>All</button>
                <button type='button'
                        className='btn btn-outline-secondary'>In Progress</button>
                <button type='button'
                        className='btn btn-outline-secondary'>Done</button>
            </div>
        );
    }
}

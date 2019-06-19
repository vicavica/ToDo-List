import React from 'react';

import './TodoList-el.css';

export default class TodoListElement extends React.Component {

    render() {
        const{label, onDelete, onMarkImportant, onMarkDone,
        important, done} = this.props;
        /*const{done, important} = this.state;*/

        let classNames = 'todo-list-elem';
        if(done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important';
        }

        return (
            <span className = {classNames}>
                <span
                    className='todo-list-elem-label'

                    onClick = {onMarkDone}>
                        {label}
                </span>
                <button type='button'
                        className='btn btn-outline-danger btn-sm float-right'
                        onClick = {onDelete}>
                    <i className= 'fa fa-trash-o' />
                </button>
                <button type='button'
                        className='btn btn-outline-success btn-sm float-right'
                        onClick = {onMarkImportant}>
                    <i className='fa fa-bell'/>
                </button>
        </span>
        );
    }
}

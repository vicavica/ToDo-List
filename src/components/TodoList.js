import React from 'react';
import TodoListElement from './TodoList-el';
import './TodoList.css';

export default function TodoList ({todo, onDelete, onMarkImportant, onMarkDone}) {

    const elements = todo.map( (item) => {
        const {id,...itemProps} = item;
        return (
            <li key = {id} className ='list-group-item'>
              <TodoListElement {...itemProps}
              onDelete = {() => onDelete(id)}
              onMarkImportant = {() => onMarkImportant(id)}
              onMarkDone = {() => onMarkDone(id)}/>
            </li>
        );
    });

    return (
        <ul className = 'todo-List'>
            {elements}
        </ul>
    );
};

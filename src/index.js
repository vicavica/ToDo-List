import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import Header from './components/Header';
import DueDate from './components/DueDate';
import ElSearch from './components/El-search';
import ElFilterStatus from './components/El-filter-status';
import ItemAdd from './components/item-add';


export default class App extends React.Component {
    maxId = 6;
    state = {
        data: [
            this.createTodoItem('To Learn React'),
            this.createTodoItem('To Learn Redux'),
            this.createTodoItem('To Start the Project'),
            this.createTodoItem('To Relocate'),
            this.createTodoItem('To Feed My Cat')
        ],
        searchTarget: '',
        todoInputValue: '',
        filter: 'All', //All, In Progress, Done
    };

    createTodoItem(label) {
        return  {
            id: this.maxId++,
            label,
            important: false,
            done: false
        }
    }

    deleteItem = (id) => { //put a func, because we need to set new state (old arr data without one el)
        this.setState(({data}) => { //to return old arr without one el, we need to know what was the old one
            const index = data.findIndex((el) => el.id === id); //find index of el to delete

            const arrFirstPart = data.slice(0, index);
            const arrSecondPart = data.slice(index +1);

            const newArr = [...arrFirstPart, ...arrSecondPart];

            return {
              data: newArr
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
         this.setState(({data}) => {
             const newArr = [...data, newItem];
             return {
                 data: newArr,
                 todoInputValue: '',
             };
         });
     };

    onMarkImportant = (id) => {
        this.setState((prevState) => {
            return {
                data: prevState.data.map((el) => {
                    if (el.id === id) {
                        return {
                            ...el,
                            important: !el.important,
                        }
                    }

                    return el;
                })
            }

        });
    };

    onMarkDone = (id) => {
        this.setState((prevState) => {
            return {
                data: prevState.data.map((el) => {
                    if (el.id === id) {
                        return {
                            ...el,
                            done: !el.done,
                        }
                    }

                    return el;
                })
            }

        });
    };

    onInputTextChange = (text) => {
        this.setState((prevState) => ({
            searchTarget: text,
        }))
    };

    onAddItemInputChange = (text) => {
        this.setState((prevState) => ({
            todoInputValue: text,
        }))
    };

    filter = (items, filter) => {
        switch(filter) {
            case 'All':
                return items;
            case 'In Progress':
                return items.filter((el) => !el.done);
            case 'Done':
                return items.filter((el) => el.done);
            default:
                return items;
        }

    };

    onFilterChange = (filter) => {
        this.setState( (prevState) => ({
            filter: filter,
        }))
    };

    render () {
        const { data, searchTarget, todoInputValue, filter } = this.state;

        const filteredContacts = this.filter(data.filter(el => {                    //search realization
            const dataElToLowerCase = el.label.toLowerCase();
            const searchValueToLowerCase = searchTarget.toLowerCase();

           return dataElToLowerCase.includes(searchValueToLowerCase);
        }), filter);

        console.log(filteredContacts);



        const doneItems = data.filter((el) => el.done).length;          // counter realization for <h2>
        const todoItems = data.length - doneItems;

        return (
            <div>
                <Header toDo = {todoItems} done = {doneItems} />
                <DueDate />
                <ItemAdd
                    onItemAdd = {this.addItem}
                    onInputTextChange = {this.onAddItemInputChange}
                    value={todoInputValue}
                />
                <TodoList todo = {filteredContacts}
                          onDelete = {this.deleteItem}
                          onMarkImportant = {this.onMarkImportant}
                          onMarkDone = {this.onMarkDone}/>
                <div className = 'btn-group'>
                    <ElSearch
                        onInputTextChange={this.onInputTextChange}
                        value={searchTarget}
                    />
                    <ElFilterStatus filter={this.state.filter}
                                    onFilterChange = {this.onFilterChange} />
                </div>

            </div>
        );};
    };

ReactDOM.render(<App />, document.getElementById('root'));
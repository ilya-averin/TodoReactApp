import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';


export default class App extends Component {

	maxId = 100;

	state = {
    todoData: [
      { label: 'Learn React.js', important: false, id: 1 },
      { label: 'Learn Vue.js', important: true, id: 2 },
      { label: 'Make Awesome app', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(( {todoData} ) => {
			const idx = todoData.findIndex((el) => el.id === id);
				// const before = todoData.slice(0, idx);
				// 	const after = todoData.slice(idx );
							const newArray = [
								...todoData.slice(0, idx),
								...todoData.slice(idx +1)
							];
					return {
				todoData: newArray
			};
		});
  };

	addItem = (Text) => {
		// generate id
		const newItem = {
			label: Text,
			important: false,
			id: this.maxId++
		};
		// add element in array
		this.setState(( {todoData} ) => {
			// add element in array
			const newArr = [...todoData, newItem];

				return {
					todoData: newArr
				};
		});

		// console.log('Added,', Text);
	};

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        	<div className="top-panel d-flex">
						<SearchPanel />
						<ItemStatusFilter />
        	</div>

        <TodoList todos = {this.state.todoData}
          onDeleted = { this.deleteItem }/>

				<ItemAddForm onItemAdded = { this.addItem }/>
      </div>
    );
  }
};

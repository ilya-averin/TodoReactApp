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
			this.createTodoItem('Learn React.js'),
			this.createTodoItem('Learn Vue.js'),
			this.createTodoItem('Make Awesome app')
    ]
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		};
	}

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

	addItem = (text) => {
		// generate id
			const newItem = this.createTodoItem(text);

	// add element in array
		this.setState(( {todoData} ) => {
			// add element in array
				const newArr = [...todoData, newItem];

				return {
					todoData: newArr
				};
		});
	};

	toggleProperty(arr, id, propName) {

	};

	onToggleDone = (id) => {
		this.setState(( {todoData} ) => {
			const idx = todoData.findIndex((el) => el.id === id);
// create updatw object
				const oldItem = todoData[idx];
					const newItem = {...oldItem, done: !oldItem.done};
// construct new array
						const newArray = [
							...todoData.slice(0, idx),
							newItem,
							...todoData.slice(idx +1)
						];

				return {
					todoData: newArray
				};
		});
	};

	onToggleImportant = (id) => {

	};


  render() {

		const { todoData } = this.state;
			const doneCount = todoData.filter((el) => el.done).length;
				const todoCount = todoData.length - doneCount;

				return (
					<div className="todo-app">
						<AppHeader toDo = {todoCount} done = {doneCount} />
							<div className="top-panel d-flex">
								<SearchPanel />
								<ItemStatusFilter />
							</div>

						<TodoList todos = {todoData}
							onDeleted = {this.deleteItem}
							onToggleImportant = {this.onToggleImportant}
							onToggleDone = {this.onToggleDone}
						/>

						<ItemAddForm onItemAdded = {this.addItem}/>
					</div>
				);
  	}
};

import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


export default class App extends {

	state = {

	};

  const todoData = [
    { label: 'Learn React.js', important: false, id: 1 },
    { label: 'Learn Vue.js', important: true, id: 2 },
    { label: 'Make Awesome app', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData}
				onDeleted = { (id) => console.log('del', id)}/>
    </div>
  );
};

export default App;

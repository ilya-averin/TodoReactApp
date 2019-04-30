import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'


const App =()=>{

  const todoData = [
    { label: 'Learn Vue.js', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Build React App', important: false }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoData }/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

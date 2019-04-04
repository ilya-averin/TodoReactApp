import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder="search"></input>
    <ul>
      <li>Build Awesome App</li>
     	<li>buil awesome app</li>
    </ul> 
  </div>
);

ReactDOM.render(el, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //stylesheet
import Todo from './todo';
import './todo.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

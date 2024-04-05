// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.task}
      <button onClick={toggleComplete} className="toggle-complete-btn">Complete</button>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;

// src/TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task: task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input type="text" placeholder="Add new task" onKeyPress={(e) => {
        if (e.key === 'Enter' && e.target.value) {
          addTodo(e.target.value);
          e.target.value = ''; // Clear input after adding
        }
      }} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={() => toggleComplete(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

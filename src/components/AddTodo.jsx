import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        title: input,
        completed: false,
      };
      addTodo(newTodo);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add Task</button>
    </form>
  );
}

export default AddTodo;

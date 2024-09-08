import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function Todos() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    // todos are loaded from localStorage automatically on app load via redux slice
  }, []);

  return (
    <div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todoId={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default Todos;


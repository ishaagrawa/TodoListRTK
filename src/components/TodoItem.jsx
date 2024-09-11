import React, { useState } from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    todo.title = editValue;
    setIsEditing(false);
  };

  return (
    <div className="todo-item-container">
      <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="todo-toggle"
        />

        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="edit-input"
          />
        ) : (
          <span className="todo-text">{todo.title}</span>
        )}

        <div className="todo-actions">
          {isEditing ? (
            <button className="icon-btn save-btn" onClick={handleSave} title="Save">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M5 13l4 4L19 7l-1.41-1.42L9 14.17l-2.59-2.58L5 13z"/>
              </svg>
            </button>
          ) : (
            <button className="icon-btn edit-btn" onClick={handleEdit} title="Edit">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M3 17.25V21h3.75l11.09-11.09-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
              </svg>
            </button>
          )}

          <button className="icon-btn delete-btn" onClick={() => deleteTodo(todo.id)} title="Delete">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M16 9v10H8V9h8m-1.5-6H9.5L9 4H5v2h14V4h-4l-.5-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

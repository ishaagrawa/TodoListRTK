import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, deleteTodo, toggleComplete } from '../feature/todo/todoSlice';

function TodoItem({ todoId }) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.find((t) => t.id === todoId));

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState('');

  useEffect(() => {
    if (todo) {
      setTodoMsg(todo.todo);
    }
  }, [todo]);

  if (!todo) return null;

  const handleEditTodo = () => {
    dispatch(updateTodo({ id: todo.id, todo: todoMsg }));
    setIsTodoEditable(false);
  };

  const handleToggleCompleted = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={`flex border m-3 border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`}>
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={handleToggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'} ${todo.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            handleEditTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={handleDeleteTodo}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

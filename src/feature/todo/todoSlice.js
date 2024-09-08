import { createSlice, nanoid } from '@reduxjs/toolkit';

// Function to load todos from localStorage
const loadFromLocalStorage = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

// Function to save todos to localStorage
const saveToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState = {
  todos: loadFromLocalStorage(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      saveToLocalStorage(state.todos); // Save to localStorage
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(state.todos); // Save to localStorage
    },
    updateTodo: (state, action) => {
      const { id, todo } = action.payload;
      const existingTodo = state.todos.find((t) => t.id === id);
      if (existingTodo) {
        existingTodo.todo = todo;
        saveToLocalStorage(state.todos); // Save to localStorage
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveToLocalStorage(state.todos); // Save to localStorage
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;

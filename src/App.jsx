import React from 'react';
import Todos from './components/Todos';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <h1 className="app-title"> TO-DO LIST</h1>
      <Todos />
    </div>
  );
}

export default App;

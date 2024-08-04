import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList.jsx';
import TodoForm from './components/TodoForm.jsx';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/dummydata.json')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, id: tasks.length + 1, completed: false, timestamp: new Date().toISOString() }
    ]);
  };

  const updateTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm onAdd={addTask} />
      <TodoList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;

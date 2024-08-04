import React from 'react';
import TodoItem from './TodoItems';

const TodoList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;

import React, { useState } from 'react';

const TodoItems = ({ task, onUpdate, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="task-item">
      <div className="task-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{task.title}</h3>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onUpdate(task.id)}
        />
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
      {isExpanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <small>Last updated: {new Date(task.timestamp).toLocaleString()}</small>
        </div>
      )}
    </div>
  );
};

export default TodoItems;

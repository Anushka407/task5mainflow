import React from "react";

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </span>
      <button onClick={() => {
        console.log("Delete button clicked for id:", todo.id);
        deleteTodo(todo.id);
      }}>Delete</button>
    </li>
  );
}

export default TodoItem;


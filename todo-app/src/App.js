import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
    }
  };

  const deleteTodo = (id) => {
    console.log("Deleting todo with id:", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;

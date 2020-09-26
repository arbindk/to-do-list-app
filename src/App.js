import React, { useState } from "react";

import "./App.css";
import Todo from "./Todo";

function App() {
  //React way of writing variables
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const adATodo = (event) => {
    event.preventDefault();
    setTodos([inputText, ...todos]);
    setInputText("");
    console.log([inputText, ...todos]);
  };

  return (
    <div className="app">
      <h1>Todo app</h1>
      <form>
        <input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          type="text"
        />
        <button type="submit" onClick={adATodo} disabled={!inputText}>
          ADD A TODO
        </button>
      </form>
      {todos.map((todo) => (
        //<h2>{todo}</h2>
        <Todo text={todo} />
      ))}
    </div>
  );
}

export default App;

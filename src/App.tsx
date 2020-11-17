import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { ControlPannel } from "./components/ControlPanel";
import { Todos } from "./components/Todos";
import { todo } from "./types/todo";
import { Searching } from "./components/Searching";

const ToDoApp = styled.section`
  width: 400px;
  margin: 20px auto;
`;

function App() {
  const [todos, setTodos] = useState<Array<todo>>([]);
  const [filter, setFilter] = useState("");
  return (
    <ToDoApp>
      <ControlPannel
        addTodo={(value) => {
          setTodos(todos.concat({ text: value, completed: false }));
        }}
      />
      <Searching
        onSearch={(value) => {
          setFilter(value);
        }}
      />
      <Todos
        todos={todos.filter((todo) => todo.text.indexOf(filter) !== -1)}
        setTodos={setTodos}
      />
    </ToDoApp>
  );
}

export default App;

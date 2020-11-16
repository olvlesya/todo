import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { ControlPannel } from "./components/ControlPanel";
import { Todos } from "./components/Todos";
import { todo } from "./types/todo";

const ToDoApp = styled.section`
  width: 400px;
  margin: 20px auto;
`;

function App() {
  const [todos, setTodos] = useState<Array<todo>>([]);
  return (
    <ToDoApp>
      <ControlPannel
        addTodo={(value) => {
          setTodos(todos.concat({ text: value, completed: false }));
        }}
      />
      <Todos todos={todos} setTodos={setTodos} />
    </ToDoApp>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { ControlPannel } from "./components/ControlPanel";
import { Todos } from "./components/Todos";
import { todo } from "./types/todo";
import { Searching } from "./components/Searching";
import { createTodo, getTodos } from "./utilities/utilities";

const ToDoApp = styled.section`
  width: 400px;
  margin: 20px auto;
`;

function App() {
  const [todos, setTodos] = useState<Array<todo>>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getTodos().then((value) => {
      setTodos(value);
    });
  }, []);

  return (
    <ToDoApp>
      <ControlPannel
        addTodo={(value) => {
          createTodo({ text: value, completed: false }).then((newTodo) => {
            setTodos(todos.concat(newTodo));
          });
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

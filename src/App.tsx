import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { ControlPannel } from "./components/ControlPanel";
import { Todos } from "./components/Todos";
import { Searching } from "./components/Searching";
import { stateType } from "./types/store";

const ToDoApp = styled.section`
  width: 400px;
  margin: 20px auto;

  @media (max-width: 640px) {
    width: 90%;
  }
`;

const App: React.FC<{}> = () => {
  const todos = useSelector<stateType, stateType["todos"]>(
    (state) => state.todos
  );
  const [filter, setFilter] = useState("");

  return (
    <ToDoApp>
      <ControlPannel />
      <Searching
        onSearch={(value) => {
          setFilter(value);
        }}
      />
      <Todos
        todos={todos
          .filter((todo) => todo.text.indexOf(filter) !== -1)
          .sort(
            (todo1, todo2) => Number(todo1.completed) - Number(todo2.completed)
          )}
      />
    </ToDoApp>
  );
};

export default App;

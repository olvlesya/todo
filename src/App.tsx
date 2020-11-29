import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { ControlPannel } from "./components/ControlPanel";
import { Todos } from "./components/Todos";
import { todo } from "./types/todo";
import { Searching } from "./components/Searching";
import { createTodo, getTodos } from "./utilities/utilities";
import { initTodo, todoCreate } from "./store/actions";

const ToDoApp = styled.section`
  width: 400px;
  margin: 20px auto;
`;

type Props = {
  todos: Array<todo>;
  initTodos: (todos: Array<todo>) => void;
  addTodo: (id: number, value: string) => void;
};

const App: React.FunctionComponent<Props> = ({ todos, initTodos, addTodo }) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getTodos().then((value) => {
      initTodos(value);
    });
  }, []);

  return (
    <ToDoApp>
      <ControlPannel
        addTodo={(value) => {
          createTodo({ text: value, completed: false }).then((newTodo) => {
            addTodo(newTodo.id, newTodo.text);
          });
        }}
      />
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

type stateType = {
  todos: Array<todo>;
};

const mapStateToProps = (state: stateType) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    initTodos: (todos: Array<todo>) => {
      dispatch(initTodo(todos));
    },
    addTodo: (id: number, value: string) => {
      dispatch(todoCreate(id, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

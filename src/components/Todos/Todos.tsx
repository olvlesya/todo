import React from "react";
import { List } from "antd";
import { Todo } from "./Todo";

type Props = {
  todos: string[];
  setTodos: (todos: string[]) => void;
};

export const Todos: React.FunctionComponent<Props> = ({ todos, setTodos }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(item, index) => (
        <Todo
          text={item}
          onDelete={() => {
            const todosCopy = [...todos];
            todosCopy.splice(index, 1);
            setTodos(todosCopy);
          }}
        />
      )}
    />
  );
};

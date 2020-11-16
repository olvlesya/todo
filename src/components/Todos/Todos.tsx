import React from "react";
import { List } from "antd";
import { Todo } from "./Todo";
import { todo } from "../../types/todo";

type Props = {
  todos: Array<todo>;
  setTodos: (todos: Array<todo>) => void;
};

export const Todos: React.FunctionComponent<Props> = ({ todos, setTodos }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(item, index) => (
        <Todo
          text={item.text}
          completed={item.completed}
          onTodoStateChange={(completed) => {
            item.completed = completed;
            const todosElement = [...todos];
            todosElement.splice(index, 1);
            todosElement.push(item);
            setTodos(todosElement);
          }}
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

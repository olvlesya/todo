import React from "react";
import { List } from "antd";
import { Todo } from "./Todo";
import { todo } from "../../types/todo";

type Props = {
  todos: Array<todo>;
};

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(item) => (
        <Todo id={item.id} text={item.text} completed={item.completed} />
      )}
    />
  );
};

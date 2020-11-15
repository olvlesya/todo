import React from "react";
import { Todo } from "./Todo";

type Props = {
  todos: string[];
};

export const Todos: React.FunctionComponent<Props> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo text={todo} key={index} />
      ))}
    </div>
  );
};

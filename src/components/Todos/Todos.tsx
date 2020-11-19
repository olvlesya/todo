import React from "react";
import { List } from "antd";
import { Todo } from "./Todo";
import { todo } from "../../types/todo";
import { deleteTodo, updateTodo } from "../../utilities/utilities";

type Props = {
  todos: Array<todo>;
  setTodos: (todos: Array<todo>) => void;
};

export const Todos: React.FunctionComponent<Props> = ({ todos, setTodos }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(item) => (
        <Todo
          text={item.text}
          completed={item.completed}
          onTodoStateChange={(completed) => {
            item.completed = completed;
            updateTodo(item).then(() => {
              setTodos(
                todos.filter((todo) => todo.id !== item.id).concat(item)
              );
            });
          }}
          onDelete={() => {
            deleteTodo(item.id).then(() => {
              setTodos(todos.filter((todo) => todo.id !== item.id));
            });
          }}
        />
      )}
    />
  );
};

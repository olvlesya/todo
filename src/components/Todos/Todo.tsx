import React from "react";
import { Checkbox, List, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import styles from "./todo.module.scss";
import { removeTodo, changeTodo } from "../../store/async-actions";

type Props = {
  id: number;
  text: string;
  completed: boolean;
  todoComplete: (id: number, text: string, completed: boolean) => void;
  todoRemove: (id: number) => void;
};

const TodoContainer: React.FunctionComponent<Props> = ({
  id,
  text,
  completed,
  todoComplete,
  todoRemove,
}) => {
  return (
    <List.Item
      className={completed ? styles.completed : ""}
      actions={[
        <Button type="primary" shape="circle" icon={<EditOutlined />}></Button>,
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          onClick={() => {
            todoRemove(id);
          }}
        ></Button>,
      ]}
    >
      <Checkbox
        checked={completed}
        onChange={() => {
          todoComplete(id, text, !completed);
        }}
      >
        {text}
      </Checkbox>
    </List.Item>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    todoComplete: (id: number, text: string, completed: boolean) => {
      dispatch(changeTodo(id, text, completed));
    },
    todoRemove: (id: number) => {
      dispatch(removeTodo(id));
    },
  };
};

export const Todo = connect(null, mapDispatchToProps)(TodoContainer);

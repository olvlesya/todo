import React from "react";
import { Checkbox, List, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import styles from "./todo.module.scss";
import { todoComplete, todoRemove } from "../../store/actions";
import { deleteTodo, updateTodo } from "../../utilities/utilities";

type Props = {
  id: number;
  text: string;
  completed: boolean;
  todoComplete: (id: number, completed: boolean) => void;
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
            deleteTodo(id).then(() => {
              todoRemove(id);
            });
          }}
        ></Button>,
      ]}
    >
      <Checkbox
        checked={completed}
        onChange={() => {
          updateTodo({ id, text, completed: !completed }).then(() => {
            todoComplete(id, !completed);
          });
        }}
      >
        {text}
      </Checkbox>
    </List.Item>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    todoComplete: (id: number, completed: boolean) => {
      dispatch(todoComplete(id, completed));
    },
    todoRemove: (id: number) => {
      dispatch(todoRemove(id));
    },
  };
};

export const Todo = connect(null, mapDispatchToProps)(TodoContainer);

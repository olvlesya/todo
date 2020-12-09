import React, { useState } from "react";
import { Checkbox, List, Button, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import styles from "./todo.module.scss";
import {
  removeTodo,
  updateTodoState,
  changeTodo,
} from "../../store/async-actions";

type Props = {
  id: number;
  text: string;
  completed: boolean;
  todoComplete: (id: number, text: string, completed: boolean) => void;
  todoRemove: (id: number) => void;
  todoEdit: (id: number, text: string, completed: boolean) => void;
};

const TodoContainer: React.FunctionComponent<Props> = ({
  id,
  text,
  completed,
  todoEdit,
  todoComplete,
  todoRemove,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(text);
  return (
    <List.Item
      className={completed ? styles.completed : ""}
      actions={[
        <Button
          type="primary"
          shape="circle"
          icon={<EditOutlined />}
          onClick={() => {
            setEditMode(true);
          }}
        ></Button>,
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
        {editMode ? (
          <Input
            className={styles.editTodo}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setEditMode(false);
                todoEdit(id, value, completed);
              }
            }}
          />
        ) : (
          text
        )}
      </Checkbox>
    </List.Item>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    todoComplete: (id: number, text: string, completed: boolean) => {
      dispatch(updateTodoState(id, text, completed));
    },
    todoRemove: (id: number) => {
      dispatch(removeTodo(id));
    },
    todoEdit: (id: number, text: string, completed: boolean) => {
      dispatch(changeTodo(id, text, completed));
    },
  };
};

export const Todo = connect(null, mapDispatchToProps)(TodoContainer);

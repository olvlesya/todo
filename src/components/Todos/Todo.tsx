import React, { useState } from "react";
import { Checkbox, List, Button, Input, Modal } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import styles from "./todo.module.scss";
import { todoRemove, todoUpdateText, todoComplete } from "../../store/actions";

const { confirm } = Modal;

type Props = {
  id: number;
  text: string;
  completed: boolean;
  updateTodoState: (id: number, completed: boolean) => void;
  removeTodoById: (id: number) => void;
  updateTodoText: (id: number, text: string) => void;
};

export const TodoContainer: React.FC<Props> = ({
  id,
  text,
  completed,
  updateTodoState,
  removeTodoById,
  updateTodoText,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(text);
  const listItemStyles = [styles.listItem, completed && styles.completed]
    .filter(Boolean)
    .join(" ");
  return (
    <List.Item
      className={listItemStyles}
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
          danger
          icon={<DeleteOutlined />}
          onClick={() => {
            confirm({
              title: "Do you really want to remove the todo?",
              onOk() {
                removeTodoById(id);
              },
            });
          }}
        ></Button>,
      ]}
    >
      <Checkbox
        checked={completed}
        data-testid={`todo-checkbox-${id}`}
        onChange={() => {
          updateTodoState(id, !completed);
        }}
      >
        {editMode ? (
          <Input
            className={styles.editTodo}
            data-testid={`todo-input-${id}`}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setEditMode(false);
                updateTodoText(id, value);
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

// Could be implemented using react hooks useSelector and useDispatch
// but decided to try an old approach
const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateTodoState: (id: number, completed: boolean) => {
      dispatch(todoComplete(id, completed));
    },
    removeTodoById: (id: number) => {
      dispatch(todoRemove(id));
    },
    updateTodoText: (id: number, text: string) => {
      dispatch(todoUpdateText(id, text));
    },
  };
};

export const Todo = connect(null, mapDispatchToProps)(TodoContainer);

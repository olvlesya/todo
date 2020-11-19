import React, { useState } from "react";
import { Checkbox, List, Button, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./todo.module.scss";

type Props = {
  text: string;
  onDelete: () => void;
  onTodoStateChange: (value: boolean) => void;
  onEdit: (value: string) => void;
  completed: boolean;
};

export const Todo: React.FunctionComponent<Props> = ({
  text,
  onDelete,
  onTodoStateChange,
  onEdit,
  completed,
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
            onDelete();
          }}
        ></Button>,
      ]}
    >
      <Checkbox
        checked={completed}
        onChange={() => {
          onTodoStateChange(!completed);
        }}
      >
        {editMode ? (
          <Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setEditMode(false);
                onEdit(value);
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

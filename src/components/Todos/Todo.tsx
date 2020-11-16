import React from "react";
import { Checkbox, List, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./todo.module.scss";

type Props = {
  text: string;
  onDelete: () => void;
  onTodoStateChange: (value: boolean) => void;
  completed: boolean;
};

export const Todo: React.FunctionComponent<Props> = ({
  text,
  onDelete,
  onTodoStateChange,
  completed,
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
        {text}
      </Checkbox>
    </List.Item>
  );
};

import React from "react";
import { Checkbox, List, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

type Props = {
  text: string;
  onDelete: () => void;
};

export const Todo: React.FunctionComponent<Props> = ({ text, onDelete }) => {
  return (
    <List.Item
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
      <Checkbox>{text}</Checkbox>
    </List.Item>
  );
};

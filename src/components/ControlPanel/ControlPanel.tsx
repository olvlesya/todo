import React, { useState } from "react";
import { Input } from "antd";

type Props = {
  addTodo: (value: string) => void;
};

export const ControlPannel: React.FunctionComponent<Props> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Input
        placeholder="Enter todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setValue("");
            addTodo(value);
          }
        }}
      />
    </div>
  );
};

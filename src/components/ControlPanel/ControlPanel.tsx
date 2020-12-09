import React, { useState } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/async-actions";
type Props = {};

export const ControlPannel: React.FunctionComponent<Props> = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <Input
        placeholder="Enter todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setValue("");
            dispatch(addTodo(value));
          }
        }}
      />
    </div>
  );
};

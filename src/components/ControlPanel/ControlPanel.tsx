import React, { useState } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { todoCreate } from "../../store/actions";
type Props = {};

export const ControlPannel: React.FC<Props> = () => {
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
            dispatch(todoCreate(value));
          }
        }}
      />
    </div>
  );
};

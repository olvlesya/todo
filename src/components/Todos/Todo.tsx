import React from "react";
import { Checkbox } from "antd";

type Props = {
  text: string;
};

export const Todo: React.FunctionComponent<Props> = ({ text }) => {
  return (
    <div>
      <Checkbox>{text}</Checkbox>
    </div>
  );
};

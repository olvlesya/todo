import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

type Props = {
  onSearch: (value: string) => void;
};
export const Searching: React.FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Search
        placeholder="Find todo"
        onSearch={onSearch}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

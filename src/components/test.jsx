import React, { useState } from "react";

export const Control = () => {
  const [value, setValue] = useState("");

  return (
    <input value={value} onChange={(e) => setValue(e.target.value)}></input>
  );
};

export class ControlClass extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      ></input>
    );
  }
}

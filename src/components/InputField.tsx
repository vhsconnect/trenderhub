import * as React from "react";


const InputField = (props: InputInterface) => {
  return (
    <input
      type="text"
      value={props.value}
      id="name"
      onChange={props.update}
    />
  );
};

export default InputField

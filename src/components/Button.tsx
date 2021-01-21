import * as React from "react";
const Button = (props: ButtonInterface) => (
  <button
    onClick={e => {
      e.preventDefault();
      props.actuate();
    }}
  >
  {props.content}
  </button>
);

export default Button

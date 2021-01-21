import * as React from "react";
const Button = (props: ButtonInterface) => (
  <button
    onClick={e => {
      e.preventDefault();
      props.actuate(e);
    }}
  >
  {props.content}
  </button>
);

export default Button

import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/styles.css";
import { App } from "./App";
ReactDOM.render(<App />, document.getElementById("spa"), () =>
  console.log("attached")
);

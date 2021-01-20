import * as React from "react";
import * as style from "../styles/stylesClasses";
import InputField from "./InputField";
import { reducer, initialState } from "../state/reducers";

export function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const textUpdater: textUpdateFunction = e =>
    dispatch({ type: "updateSearchBox", value: e.target.value });

  return (
    <div>
      <header className={style.header}>
        <h1>Trender Hub</h1>
        <InputField value={state.searchFieldText} update={textUpdater} />
      </header>
      <hr />
      <div id="content" className={style.app}>
      </div>
    </div>
  );
}

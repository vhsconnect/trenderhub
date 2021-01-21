import * as React from "react";
import * as styles from "../styles/stylesClasses";
import InputField from "./InputField";
import { reducer, initialState } from "../state/reducers";
import useInitHook from "../hooks/useInitHook";
import MainView from "./MainView";
export function App() {

  const { repos, isLoading } = useInitHook();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
  dispatch({ type: "updateRepos", value: repos });
  }, [repos])

  const textUpdater: textUpdateFunction = e =>
    dispatch({ type: "updateSearchBox", value: e.target.value });

  return (
    <div>
      <header className={styles.header}>
        <h1>Trender Hub</h1>
        <InputField value={state.searchFieldText} update={textUpdater} />
      </header>
      <hr />
      <nav className={styles.nav}>
        <span>
          <h4>
            <a className={styles.navItem} onClick={e => console.log("clicked")}>
              New and Popular
            </a>
          </h4>
        </span>
        <span>
          <h4>
            <a className={styles.navItem} onClick={e => console.log("clicked")}>
              My Stars
            </a>
          </h4>
        </span>
      </nav>
      <div id="content" className={styles.app}>
        <MainView repos={repos} />
      </div>
    </div>
  );
}

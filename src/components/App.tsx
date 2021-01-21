import * as React from "react";
import * as styles from "../styles/stylesClasses";
import InputField from "./InputField";
import { reducer, initialState } from "../state/reducers";
import useInitHook from "../hooks/useInitHook";
import MainView from "./MainView";
import { repoParser } from "../helpers/repos";
import { starredCookieUpdater } from "../helpers/cookies";
export function App() {
  const { repos, isLoading } = useInitHook();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const repoFilterFunction = state.myStarsMode
    ? (each: Repo) => each.isStarred
    : (each: Repo) => each;

  const updateStarredRepos = (id: number): void => {
    starredCookieUpdater(id);
    dispatch({ type: "updateRepos", value: repos.map(repoParser) });
  };

  React.useEffect(() => {
    dispatch({ type: "updateRepos", value: repos });
  }, [repos]);

  const textUpdater: textUpdateFunction = e =>
    dispatch({ type: "updateSearchBox", value: e.target.value });

  return (
    <div>
      <header className={styles.header}>
        <h1>Trender Hub</h1>
        <InputField
          value={state.searchFieldText}
          update={textUpdater}
          placeholder="Filter by Language"
        />
      </header>
      <hr />
      <nav className={styles.nav}>
        <span>
          <h4>
            <a
              className={styles.navItem}
              onClick={e =>
                dispatch({
                  type: "toggleMyStarsMode",
                  value: false
                })
              }
            >
              New and Popular
            </a>
          </h4>
        </span>
        <span>
          <h4>
            <a
              className={styles.navItem}
              onClick={e =>
                dispatch({
                  type: "toggleMyStarsMode",
                  value: true
                })
              }
            >
              My Stars
            </a>
          </h4>
        </span>
      </nav>
      <div id="content" className={styles.app}>
        {isLoading ? (
          <div className="flex justify-center">
            <p className="place-self-center p-72" >Loading</p>
          </div>
        ) : (
          <MainView
            repos={state.repos
              .filter(repoFilterFunction)
              .filter(x =>
                x.language
                  .toLowerCase()
                  .match(new RegExp(state.searchFieldText.toLowerCase()))
              )}
            updateStarredRepos={updateStarredRepos}
          />
        )}
      </div>
    </div>
  );
}

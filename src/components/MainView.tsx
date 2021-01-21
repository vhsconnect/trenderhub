import * as React from "react";
import RepoCard from "./RepoCard";
import * as styles from "../styles/stylesClasses";
const MainView = (props: { repos: Repo[] }) => {
  return (
    <div className={styles.repoContainer}>
      {props.repos.map(each => (
        <div key={`key-${each.id}`} className="xl:col-span-1 xl:p-0">
          <RepoCard  repo={each} />
        </div>
      ))}
    </div>
  );
};

export default MainView;

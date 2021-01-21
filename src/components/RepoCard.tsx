import * as React from "react";
import * as styles from "../styles/stylesClasses";
import Tag from "./Tag";
import Button from "./Button";
const RepoCard = (props: { repo: Repo }) => {
  const { repo } = props;
  return (
    <div className={styles.repoCard}>
      <h4 className={styles.repoName}>
        <a
          target="_blank"
          href={repo.url.replace(/api\./, "").replace(/\/repos/, "")}
        >
          {repo.name}
        </a>
      </h4>
      <p className={styles.stargazers}>
        stargazers: {repo["stargazers_count"]}
      </p>
      <p className={styles.repoDescription}> {repo.description}</p>
      {repo.language ? <Tag text={repo.language} /> : <div />}
      <div className={styles.starButton}>
        <Button actuate={() => {}} content="Star this repo" />
      </div>
    </div>
  );
};

export default RepoCard;

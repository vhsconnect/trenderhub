import { useEffect, useState } from "react";
import { repoParser } from "../helpers/repos";
import { lastWeeksDate } from "../helpers/date";

export default function useInitHook(): {
  repos: Repo[];
  isLoading: boolean;
} {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await fetch(
        `https://api.github.com/search/repositories?q=created:>${lastWeeksDate()}&sort=stars&order=desc`
      )
        .then(
          data => data.json(),
          e => {
            throw new Error(e);
          }
        )
        .then(data => {
          setRepos(data.items.map(repoParser));
          setIsLoading(false);
        })
        .catch(e => {
          console.error("/GET: fetching error useInitHook | ", e);
        });
    })();
  }, []);
  return { repos, isLoading };
}

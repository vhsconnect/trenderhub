import { useEffect, useState } from "react";

export default function useInitHook() : {
  repos: Repo[]
  isLoading: boolean
}{
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const f = async () => {
      await fetch("https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc")
        .then(
          data => data.json(),
          e => {
            throw new Error(e);
          }
        )
        .then(data => {
          console.log(data)
          setRepos(data.items);
          setIsLoading(false);
        })
        .catch(e => {
          console.error("/GET: fetching error useInitHook | ", e);
        });
    };
    f();
  }, []);
  return { repos, isLoading };
}

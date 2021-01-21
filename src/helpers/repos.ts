import { readStarredIdsFromCookie } from "../helpers/cookies";

export const repoParser = (repo: Repo) => {
  let currentStars = readStarredIdsFromCookie();
  if (currentStars.includes(repo.id.toString())) {
  }
  return {
    id: repo.id,
    name: repo.name,
    url : repo.url,
    description: repo.description,
    language: repo.language || '',
    "stargazers_count": repo["stargazers_count"],
    isStarred: currentStars.includes(repo.id.toString()) ? true : false
  };
};

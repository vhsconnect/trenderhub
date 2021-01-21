export const updateLocalStorage = (id: number) => {

  let storage = window.localStorage.getItem("starredIds") || "";

  storage = storage.includes(id.toString())
    ? storage
        .split(",")
        .filter(x => x !== id.toString())
        .join(",")
    : storage.split(",").concat(id.toString()).join(",");

  window.localStorage.setItem("starredIds", storage);
};

export const readStarredReposFromStorage = () => {
  let storage = window.localStorage.getItem("starredIds") || "";
  return storage.split(",");
};

export const starredCookieUpdater = (id: number) => {

  let storage = window.localStorage.getItem("starredIds") || "";

  storage = storage.includes(id.toString())
    ? storage
        .split(",")
        .filter(x => x !== id.toString())
        .join(",")
    : storage.split(",").concat(id.toString()).join(",");

  window.localStorage.setItem("starredIds", storage);
};

export const readStarredIdsFromCookie = () => {
  let storage = window.localStorage.getItem("starredIds") || "";
  return storage.split(",");
};

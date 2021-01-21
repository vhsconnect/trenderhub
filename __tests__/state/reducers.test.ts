import { reducer } from "../../src/state/reducers";

let state = {
  searchFieldText: "",
  repos: [],
  myStarsMode: false
};

describe("reducers.ts", () => {
  describe("reducer", () => {
    it("should update the correct state with action value", () => {
      let result = reducer(state, { type: "updateSearchBox", value: "hello" });
      expect(result).toEqual({
        searchFieldText: "hello",
        repos: [],
        myStarsMode: false
      });
    });
  });
});

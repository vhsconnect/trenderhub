/**
 * @jest-environment jsdom
 */
import {
  updateLocalStorage,
  readStarredReposFromStorage
} from "../localStorage";
const mockedGet = jest.fn();
const mockedSet = jest.fn();
let storage = { starredIds: "555" };
const windowSpy = jest.spyOn(global, "window", "get");
storage = { starredIds: "555" };
windowSpy.mockImplementation((): any => ({
  localStorage: {
    getItem: mockedGet.mockImplementation(str => storage[str]),
    setItem: mockedSet.mockImplementation(
      (key, value) => (storage[key] = value)
    )
  }
}));
beforeEach(() => {
  storage = { starredIds: "555" };
});
afterEach(() => {
  jest.clearAllMocks();
});
describe("localStorage.ts", () => {
  describe("updateLocalStorage", () => {
    it("calls window.localStorage.getItem with the correct key", () => {
      updateLocalStorage(1234);
      expect(mockedGet).toBeCalledWith("starredIds");
    });
    it("it appends the id if it does not exist", () => {
      updateLocalStorage(1234);
      expect(mockedSet).toBeCalledWith("starredIds", "555,1234");
    });
    it("removes the id if it already exists", () => {
      updateLocalStorage(555);
      expect(mockedSet).toBeCalledWith("starredIds", "");
    });
    it("also works with multiple ids", () => {
      storage = { starredIds: "234,1234,555,433,2346" };
      updateLocalStorage(555);
      expect(mockedSet).toBeCalledWith("starredIds", "234,1234,433,2346");
    });
  });
  describe("readStarredReposFromStorage", () => {
    it("returns an array even if storage is empty", () => {
      storage = { starredIds: "" };
      expect(Array.isArray(readStarredReposFromStorage())).toBe(true);
    });
    it("returns an array with the id values", () => {
      expect(readStarredReposFromStorage()).toEqual(["555"]);
    });
    it("also works with multiple ids", () => {
      storage = { starredIds: "1,2,3" };
      expect(readStarredReposFromStorage()).toEqual(["1", "2", "3"]);
    });
  });
});

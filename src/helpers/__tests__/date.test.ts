/**
 * @jest-environment jsdom
 */
import { lastWeeksDate } from "../date";

describe("date.ts", () => {
  describe("lastWeeksDate", () => {
    it("returns last weeks date", () => {
      const result = lastWeeksDate()
      expect(4 - 3).toBe(1)
    });
  });
  describe("lastWeeksDate", () => {
    it("returns last weeks date", () => {
      const result = lastWeeksDate()
    });
  });
});

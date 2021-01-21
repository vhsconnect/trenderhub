/**
 * @jest-environment jsdom
 */
const { lastWeeksDate } = require("../../src/helpers/date");

describe("date.ts", () => {
  describe("lastWeeksDate", () => {
    it("returns last weeks date", () => {
      let p =
        new Date(`${new Date().toISOString().split("T")[0]}T00:00:00.000Z`) -
        new Date(`${lastWeeksDate()}T00:00:00.000Z`);
      expect(p / 1000 / 60 / 60 / 24 > 6).toBe(true);
      expect(p / 1000 / 60 / 60 / 24 < 8).toBe(true);
    });
  });
});

import {
  getSalaryInNumber,
  calculatePercentageChange,
  getSign,
  getBackgroundColor,
} from "./helper";
test("convert salary to number", () => {
  expect(getSalaryInNumber("$32432.32432432")).toBe(32432.32432432);
  expect(getSalaryInNumber("$1234")).toBe(1234);
  expect(getSalaryInNumber("1234")).toBe(1234);
  expect(getSalaryInNumber("01")).toBe(1);
});

test("get percentage change", () => {
  expect(calculatePercentageChange(100, 80)).toBe(25);
  expect(calculatePercentageChange(100.2052, 80.258)).toBe(24.85);
});

test("get sign", () => {
  expect(getSign(0)).toBe("+");
  expect(getSign(10)).toBe("+");
  expect(getSign(-10)).toBe("");
  expect(getSign(undefined)).toBe(null);
});

test("get backgground color", () => {
  expect(getBackgroundColor(0)).toBe("yellow");
  expect(getBackgroundColor(10)).toBe("#65f72c");
  expect(getBackgroundColor(-10)).toBe("#FFA500");
  expect(getBackgroundColor(undefined)).toBe("");
});

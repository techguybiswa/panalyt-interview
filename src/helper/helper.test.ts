import {
  getSalaryInNumber,
  calculatePercentageChange,
  getSign,
  getBackgroundColor,
  isValidSalaryString
} from "./helper";
test("convert salary to number", () => {
  expect(getSalaryInNumber("$32432.32432432")).toBe(32432.32432432);
  expect(getSalaryInNumber("$1234")).toBe(1234);
});

test("get percentage change", () => {
  expect(calculatePercentageChange(100, 80)).toBe(25);
  expect(calculatePercentageChange(100.2052, 80.258)).toBe(24.85);
});

test("is valid salary string" , () => {
  expect(isValidSalaryString("$32423.3432")).toBe(true)
  expect(isValidSalaryString("$32423")).toBe(true)
  expect(isValidSalaryString("$32423..3432")).toBe(false)
  expect(isValidSalaryString("32423")).toBe(false)
  expect(isValidSalaryString("$32sdfds423")).toBe(false)
  expect(isValidSalaryString("$32ygfuhg423")).toBe(false)
  expect(isValidSalaryString("$35456^^32432")).toBe(false)
})
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

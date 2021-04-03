export const getSalaryInNumber = (salary: string) => {
  if (isValidSalaryString(salary)) {
    let salaryStringSanitized = salary.replace("$", "");
    let salaryInNumber = parseFloat(salaryStringSanitized);
    return salaryInNumber;
  }
  return 0;
};

export const isValidSalaryString = (salary: string) => {
  if (salary[0] !== "$") {
    return false;
  }
  let regEx = /^-{0,1}\d*\.{0,1}\d+$/;
  let numericalSalary = salary.slice(1);
  let isValid = regEx.test(numericalSalary);
  return isValid;
};
export const calculatePercentageChange = (
  currSalary: number,
  prevSalary: number
) => {
  let percentageChange = (
    ((currSalary - prevSalary) / prevSalary) *
    100
  ).toFixed(2);
  return parseFloat(percentageChange);
};

export const getSign = (delta?: number) => {
  if (delta === undefined) {
    return null;
  }
  if (delta >= 0) {
    return "+";
  }
  return "";
};
export const getBackgroundColor = (delta?: number) => {
  if (delta === undefined) {
    return "";
  }
  if (delta === 0) {
    return "yellow";
  } else if (delta < 0) {
    return "#FFA500";
  } else if (delta > 0) {
    return "#65f72c";
  }
};

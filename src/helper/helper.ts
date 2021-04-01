export const getSalaryInNumber = (salary: string) => {
  let salaryStringSanitized = salary.replace("$", "");
  let salaryInNumber = parseFloat(salaryStringSanitized);
  return salaryInNumber;
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
  if (delta == undefined) {
    return null;
  }
  if (delta >= 0) {
    return "+";
  } else {
    return "";
  }
};
export const getBackgroundColor = (delta?: number) => {
  if (delta == undefined) {
    return "";
  }
  if (delta == 0) {
    return "yellow";
  } else if (delta < 0) {
    return "#FFA500";
  } else if (delta > 0) {
    return "#65f72c";
  }
};

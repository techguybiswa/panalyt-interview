export const getSalaryInNumber = (salary: string) => {
  let salaryStringSanitized = salary.replace("$", "");
  let salaryInNumber = parseFloat(salaryStringSanitized);
  return salaryInNumber;
};

export const calculatePercentageChange = (
  currSalary: number,
  prevSalary: number
) => {
  let percentageChange = (((currSalary - prevSalary) / currSalary) * 100).toFixed(2)
  return parseFloat(percentageChange);
};

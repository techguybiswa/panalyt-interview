export const getSalaryInNumber = (salary: string) => {
  let salaryStringSanitized = salary.replace("$", "");
  let salaryInInt = parseFloat(salaryStringSanitized);
  return salaryInInt;
};

export const calculatePercentageChange = (
  currSalary: number,
  prevSalary: number
) => {
  return (((currSalary - prevSalary) / currSalary) * 100).toFixed(2);
};

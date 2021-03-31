export const getSalaryInNumber = (salary: string) => {
  let salaryString = salary.replace("$", "");
  let salaryInInt = parseFloat(salaryString);
  return salaryInInt;
};

export const calculatePercentageChange = (
  currSalary: number,
  prevSalary: number
) => {
  return (((currSalary - prevSalary) / currSalary) * 100).toFixed(2);
};

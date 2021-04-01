import {
  convertToLocationMap,
  calculateDelta,
  convertToArray,
  getFilters,
  getTotalSalary,
  getTotalDelta,
} from "./utils";
test("convert to map", () => {
  let testJsonData = [
    {
      firstName: "Kipper",
      lastName: "Mewrcik",
      location: "Philippines",
      prevSalary: "$10.10",
      currSalary: "$20.101",
      org: "Legal",
    },
    {
      firstName: "Beltran",
      lastName: "Bain",
      location: "Philippines",
      prevSalary: "$15",
      currSalary: "$10.20",
      org: "Technology",
    },
    {
      firstName: "Shirlene",
      lastName: "Butson",
      location: "China",
      prevSalary: "$10.101",
      currSalary: "$30.00",
      org: "Design",
    },
    {
      firstName: "Joleen",
      lastName: "Esposito",
      location: "China",
      prevSalary: "$20.10",
      currSalary: "$30.10",
      org: "HR",
    },
  ];
  let resultMapData = {
    Philippines: {
      location: "Philippines",
      prevSalary: 25.1,
      currSalary: 30.301,
    },
    China: { location: "China", prevSalary: 30.201, currSalary: 60.1 },
  };

  expect(convertToLocationMap(testJsonData)).toStrictEqual(resultMapData);
});

test("calculate delta", () => {
  let testMapData = {
    Philippines: {
      location: "Philippines",
      prevSalary: 25.1,
      currSalary: 30.301,
    },
    China: { location: "China", prevSalary: 30.201, currSalary: 60.1 },
  };
  let resultMapDataWithDelta = {
    Philippines: {
      location: "Philippines",
      prevSalary: 25.1,
      currSalary: 30.301,
      delta: 20.72,
    },
    China: {
      location: "China",
      prevSalary: 30.201,
      currSalary: 60.1,
      delta: 99,
    },
  };
  expect(calculateDelta(testMapData)).toStrictEqual(resultMapDataWithDelta);
});

test("convert to array", () => {
  let testMapData = {
    Philippines: {
      location: "Philippines",
      prevSalary: 25.1,
      currSalary: 30.301,
      delta: 20.72,
    },
    China: {
      location: "China",
      prevSalary: 30.201,
      currSalary: 60.1,
      delta: 99,
    },
  };

  let resultArray = [
    {
      location: "Philippines",
      prevSalary: 25.1,
      currSalary: 30.3,
      delta: 20.72,
    },
    {
      location: "China",
      prevSalary: 30.2,
      currSalary: 60.1,
      delta: 99,
    },
  ];
  expect(convertToArray(testMapData)).toStrictEqual(resultArray);
});

test("get filters", () => {
  let testArray = [
    {
      location: "Philippines",
      prevSalary: 25.1,
      currSalary: 30.3,
      delta: 20.72,
    },
    {
      location: "China",
      prevSalary: 30.2,
      currSalary: 60.1,
      delta: 99,
    },
  ];
  let resultFilterArray = ["Philippines", "China"];
  expect(getFilters(testArray)).toStrictEqual(resultFilterArray);
});

test("calculate total salary", () => {
  let testArray = [
    {
      location: "Philippines",
      prevSalary: 25.1,
      currSalary: 30.312,
      delta: 20.72,
    },
    {
      location: "China",
      prevSalary: 30.2,
      currSalary: 60.1,
      delta: 99,
    },
  ];

  let resultTotalSalary = "$90.41";

  expect(getTotalSalary(testArray)).toBe(resultTotalSalary);
});

test("calculate total delta", () => {
  let testArray = [
    {
      location: "Philippines",
      prevSalary: 25.1,
      currSalary: 30.312,
      delta: -2.72,
    },
    {
      location: "China",
      prevSalary: 30.2,
      currSalary: 60.1,
      delta: 9,
    },
  ];
  let resultTotalDelta = 6.28;

  expect(getTotalDelta(testArray)).toBe(resultTotalDelta);
});

import { getSalaryInNumber, calculatePercentageChange } from "../helper/helper";
export interface EmployeeDataObject {
  location: string;
  prevSalary: number;
  currSalary: number;
  delta?: string;
}
export interface MapOfLocation {
  [key: string]: EmployeeDataObject;
}
export interface DataObjectInJson {
  location: string;
  prevSalary: string;
  currSalary: string;
}

export const convertToLocationMap = (jsonData: Array<DataObjectInJson>) => {
  let mapOfLocation: MapOfLocation = {};
  jsonData.map((eachData) => {
    let prevSalary = getSalaryInNumber(eachData.prevSalary);
    let currSalary = getSalaryInNumber(eachData.currSalary);
    if (mapOfLocation.hasOwnProperty(eachData.location)) {
      mapOfLocation[eachData.location].prevSalary += prevSalary;
      mapOfLocation[eachData.location].currSalary += currSalary;
    } else {
      let salaryDataObj = {
        location: eachData.location,
        prevSalary,
        currSalary,
      };
      mapOfLocation[eachData.location] = salaryDataObj;
    }
  });
  return mapOfLocation;
};

export const calculateDelta = (locationWiseDataMap: MapOfLocation) => {
  Object.keys(locationWiseDataMap).map((eachLocation) => {
    let { currSalary, prevSalary } = locationWiseDataMap[eachLocation];
    let delta = calculatePercentageChange(currSalary, prevSalary);
    locationWiseDataMap[eachLocation] = {
      ...locationWiseDataMap[eachLocation],
      delta,
    };
  });
  return locationWiseDataMap;
};

export const convertToArray = (locationWiseDataMap: MapOfLocation) => {
  let employeeDataArray: Array<EmployeeDataObject> = [];
  Object.keys(locationWiseDataMap).map((eachLocation) => {
    employeeDataArray.push(locationWiseDataMap[eachLocation]);
  });
  return employeeDataArray;
};

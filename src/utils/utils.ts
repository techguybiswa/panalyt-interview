import { getSalaryInNumber, calculatePercentageChange } from "../helper/helper";
import { EmployeeDataObject } from "../App";
export interface MapOfLocation {
  [key: string]: EmployeeDataObject;
}
export interface DataObjectInJson {
  firstName: string;
  lastName: string;
  location: string;
  prevSalary: string;
  currSalary: string;
  org: string;
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
    let { location, currSalary, prevSalary, delta } = locationWiseDataMap[
      eachLocation
    ];
    let eachLocationData = {
      location: location,
      prevSalary: parseFloat(prevSalary.toFixed(2)),
      currSalary: parseFloat(currSalary.toFixed(2)),
      delta,
    };
    employeeDataArray.push(eachLocationData);
  });
  return employeeDataArray;
};

export const getFilters = (
  locationWiseDataArray: Array<EmployeeDataObject>
) => {
  let filters = locationWiseDataArray.map((eachData) => eachData.location);
  return filters;
};


export const getTotalSalary = (data : Array<EmployeeDataObject>) => {
  let totalSalary = 0;
  data.map((eachData) => {
    totalSalary += eachData.currSalary;
  });
  totalSalary = parseFloat(totalSalary.toFixed(2))
  return `$${totalSalary.toLocaleString("en-US")}`;
};

export const getTotalDelta = (data : Array<EmployeeDataObject>) => {
  let totalDelta = 0;
  data.map((eachData) => {
    totalDelta += eachData.delta || 0;
  });

  return parseFloat(totalDelta.toFixed(2));
};

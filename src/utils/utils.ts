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
  let locationMap: MapOfLocation = jsonData.reduce(
    (mapOfLocation: MapOfLocation, eachData) => {
      let prevSalary = getSalaryInNumber(eachData.prevSalary);
      let currSalary = getSalaryInNumber(eachData.currSalary);
      if (mapOfLocation.hasOwnProperty(eachData.location)) {
        mapOfLocation[eachData.location].prevSalary += getSalaryInNumber(
          eachData.prevSalary
        );
        mapOfLocation[eachData.location].currSalary += getSalaryInNumber(
          eachData.currSalary
        );
      } else {
        let salaryDataObj = {
          location: eachData.location,
          prevSalary,
          currSalary,
        };
        mapOfLocation[eachData.location] = salaryDataObj;
      }
      return mapOfLocation;
    },
    {}
  );
  return locationMap;
};

export const calculateDelta = (locationWiseDataMap: MapOfLocation) => {
  Object.keys(locationWiseDataMap).forEach((eachLocation) => {
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
  Object.keys(locationWiseDataMap).forEach((eachLocation) => {
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
  let filters = locationWiseDataArray.map(({ location }) => location);
  return filters;
};

export const getTotalSalary = (data: Array<EmployeeDataObject>) => {
  let totalSalary = data.reduce((accumulator: number, { currSalary }) => {
    return accumulator + currSalary;
  }, 0);
  totalSalary = parseFloat(totalSalary.toFixed(2));
  return `$${totalSalary.toLocaleString("en-US")}`;
};

export const getTotalDelta = (data: Array<EmployeeDataObject>) => {
  let totalDelta = data.reduce((accumulator: number, { delta }) => {
    if (delta !== undefined) {
      return accumulator + delta;
    }
    return 0;
  }, 0);

  return parseFloat(totalDelta.toFixed(2));
};

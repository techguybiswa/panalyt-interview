import React from "react";
import "./App.css";
import AppLayout from "./Layout/Layout";
import TableView from "./components/Table/TableView";
import ChartView from "./components/Chart/ChartView";
import Filters from "./components/Filters";

import { EmployeeData } from "./assets/EmployeeData";
import { css } from '@emotion/css'

import {
  convertToLocationMap,
  calculateDelta,
  convertToArray,
  getFilters,
} from "./utils/utils";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export interface EmployeeDataObject {
  location: string;
  prevSalary: number;
  currSalary: number;
  delta?: number;
}
export interface AppProps {}

export interface AppState {
  locationWiseDataArray: Array<EmployeeDataObject>;
  filteredLocationWiseDataArray: Array<EmployeeDataObject>;
  listOfFilters: Array<string>;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      locationWiseDataArray: [],
      listOfFilters: [],
      filteredLocationWiseDataArray: [],
    };
  }
  applyFilters = (selectedFilters: Array<string>) => {
    if (selectedFilters.length) {
      let filteredLocationWiseDataArray = this.state.locationWiseDataArray.filter(
        (eachData) => {
          return selectedFilters.indexOf(eachData.location) !== -1;
        }
      );
      this.setState({
        filteredLocationWiseDataArray,
      });
    } else {
      this.setState({
        filteredLocationWiseDataArray: this.state.locationWiseDataArray,
      });
    }
  };
  componentDidMount = () => {
    let locationMapOnSalary = convertToLocationMap(EmployeeData);
    let locationMapWithDelta = calculateDelta(locationMapOnSalary);
    let locationWiseDataArray = convertToArray(locationMapWithDelta);
    let listOfFilters = getFilters(locationWiseDataArray);
    this.setState({
      locationWiseDataArray,
      filteredLocationWiseDataArray: locationWiseDataArray,
      listOfFilters,
    });
  };
  render() {
    return (
      <AppLayout>
        <div>
          <div
            className={css`
              margin-bottom: 30px;
            `}
          >
            <Filters
              filters={this.state.listOfFilters}
              applyFilters={this.applyFilters}
            />
          </div>
          <Tabs type="card">
            <TabPane tab="Chart View" key="1">
              <ChartView data={this.state.filteredLocationWiseDataArray} />
            </TabPane>
            <TabPane tab="Table View" key="2">
              <TableView data={this.state.filteredLocationWiseDataArray} />
            </TabPane>
          </Tabs>
        </div>
      </AppLayout>
    );
  }
}

export default App;

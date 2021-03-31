import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tabs } from "antd";
import Table from "./components/Table";
import BarChart from "./components/BarChart";
import Filters from "./components/Filters";
import { EmployeeData } from "./assets/EmployeeData";
import {
  convertToLocationMap,
  calculateDelta,
  convertToArray,
  getFilters,
} from "./utils/utils";
import { isThisTypeNode } from "typescript";
const { TabPane } = Tabs;

export interface EmployeeDataObject {
  location: string;
  prevSalary: number;
  currSalary: number;
  delta?: string;
}
export interface AppProps {}

export interface AppState {
  locationWiseDataArray: Array<EmployeeDataObject>;
  filters: Array<string>;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { locationWiseDataArray: [], filters: [] };
  }
  applyFilters = (filters: Array<string>) => {
    this.setState({
      filters
    })
  };
  componentDidMount = () => {
    let locationMapOnSalary = convertToLocationMap(EmployeeData);
    let locationMapWithDelta = calculateDelta(locationMapOnSalary);
    let locationWiseDataArray = convertToArray(locationMapWithDelta);
    let filters = getFilters(locationWiseDataArray);
    this.setState({
      locationWiseDataArray,
      filters,
    });
  };
  render() {
    return (
      <div className="card-container">
        <Filters filters={this.state.filters} />
        <Tabs type="card">
          <TabPane tab="Bar Chart" key="1">
            <BarChart data={this.state.locationWiseDataArray} filters={this.state.filters}/>
          </TabPane>
          <TabPane tab="Table" key="2">
            <Table/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;

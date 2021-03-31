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
  filteredLocationWiseDataArray: Array<EmployeeDataObject>;
  listOfFilters: Array<string>;
  selectedFilters: Array<string>
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      locationWiseDataArray: [],
      listOfFilters: [],
      filteredLocationWiseDataArray: [],
      selectedFilters: []
    };
  }
  componentDidUpdate(prevProps : any, prevState: any) {
    if (this.state.selectedFilters.length !== prevState.selectedFilters.length) {
      let filteredLocationWiseDataArray = this.state.locationWiseDataArray.filter(
        (eachData) => {
          return this.state.selectedFilters.indexOf(eachData.location) != -1;
        }
      );
      this.setState({
        filteredLocationWiseDataArray,
      });
    }
  }
  applyFilters = (selectedFilters: Array<string>) => {
    this.setState({
      selectedFilters,
    });
  };
  componentDidMount = () => {
    let locationMapOnSalary = convertToLocationMap(EmployeeData);
    let locationMapWithDelta = calculateDelta(locationMapOnSalary);
    let locationWiseDataArray = convertToArray(locationMapWithDelta);
    let listOfFilters = getFilters(locationWiseDataArray);
    this.setState({
      locationWiseDataArray,
      listOfFilters,
    });
    this.applyFilters(["China", "Malaysia"]);
  };
  render() {
    return (
      <div className="card-container">
        <Filters filters={this.state.listOfFilters} />
        <Tabs type="card">
          <TabPane tab="Bar Chart" key="1">
            <BarChart
              data={this.state.filteredLocationWiseDataArray}
              filters={this.state.listOfFilters}
            />
          </TabPane>
          <TabPane tab="Table" key="2">
            <Table />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tabs } from "antd";
import Table from "./components/Table";
import BarChart from "./components/BarChart";
import Filters from "./components/Filters"
import {EmployeeData} from "./assets/EmployeeData"
import {convertToLocationMap,calculateDelta,convertToArray} from "./utils/utils"
const { TabPane } = Tabs;

export interface AppProps {
  
}
 
export interface AppState {
  
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { title: ""  };
  }
  
  componentDidMount = () => {
    let locationMapOnSalary = convertToLocationMap(EmployeeData)
    let locationMapWithDelta = calculateDelta(locationMapOnSalary)
    let locationWiseDataArray = convertToArray(locationMapWithDelta)
    console.log(locationWiseDataArray)
  }
  render() { 
    return (
      <div className="card-container">
        <Filters/>
        <Tabs type="card">
          <TabPane tab="Bar Chart" key="1">
            <BarChart />
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

import * as React from "react";
import { EmployeeDataObject } from "../App";
export interface BarChartProps {
  data: Array<EmployeeDataObject>;
  filters : Array<string>

}

export interface BarChartState {
  title: string;
}

class BarChart extends React.Component<BarChartProps, BarChartState> {
  constructor(props: BarChartProps) {
    super(props);
    this.state = { title: "This is bar chart" };
  }


  render() {
    return (
      <>
        <h1>
          {" "}
          {this.props.data.map((eachData) => (
            <h3>
              {eachData.location} {eachData.delta}
            </h3>
          ))}
        </h1>
      </>
    );
  }
}

export default BarChart;

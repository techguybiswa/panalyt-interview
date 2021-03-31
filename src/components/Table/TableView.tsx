import * as React from "react";
import { EmployeeDataObject } from "../../App";
import ViewDelta from "./ViewDelta"
export interface TableViewProps {
  data: Array<EmployeeDataObject>;
}

export interface TableViewState {
  title: string;
}

class TableView extends React.Component<TableViewProps, TableViewState> {
  constructor(props: TableViewProps) {
    super(props);
    this.state = { title: "This is table" };
  }
  render() {
    return (
      <>
        <table style={{ width: "100%" }}>
          <tr
            style={{
              background: "#04A599",
              height: "60px",
              color: "white",
              fontSize: "18px",
              textAlign: "center",
              fontFamily: "Helvetica",
            }}
          >
            <th>Location</th>
            <th>Salary</th>
            <th>Delta</th>
          </tr>
          {this.props.data.map((eachData) => (
            <tr
              style={{
                textAlign: "center",
                color: "grey",
                fontSize: "18px",
                borderBottom: "1px solid rgba(255, 0, 0, 0.2)",
                height: "60px",
              }}
            >
              <td>{eachData.location}</td>
              <td>${eachData.currSalary.toLocaleString("en-US")}</td>
              <td><ViewDelta delta={eachData.delta}/></td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}

export default TableView;

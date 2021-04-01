import * as React from "react";
import { EmployeeDataObject } from "../../App";
import ViewDelta from "./ViewDelta";
import { getTotalSalary, getTotalDelta } from "../../utils/utils";
import { css } from "@emotion/css";

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
    const { data } = this.props;
    return (
      <>
        <table style={{ width: "100%" }}>
          <tr
            className={css`
              background: #04a599;
              height: 60px;
              color: white;
              font-size: 18px;
              text-align: center;
              font-family: "Helvetica";
            `}
          >
            <th>Location</th>
            <th>Salary</th>
            <th>Delta</th>
          </tr>
          {this.props.data.map((eachData) => (
            <tr
              className={css`
                text-align: center;
                color: grey;
                font-size: 18px;
                border-bottom: 1px solid rgba(255, 0, 0, 0.2);
                height: 60px;
              `}
            >
              <td>{eachData.location}</td>
              <td>${eachData.currSalary.toLocaleString("en-US")}</td>
              <td>
                <ViewDelta delta={eachData.delta} />
              </td>
            </tr>
          ))}
          <tr
            className={css`
              text-align: center;
              color: grey;
              font-size: 18px;
              border-bottom: 1px solid rgba(255, 0, 0, 0.2);
              height: 60px;
            `}
          >
            <td>
              <b>Total:</b>{" "}
            </td>
            <td>{getTotalSalary(data)}</td>
            <td>
              <ViewDelta delta={getTotalDelta(data)} />
            </td>
          </tr>
        </table>
      </>
    );
  }
}

export default TableView;

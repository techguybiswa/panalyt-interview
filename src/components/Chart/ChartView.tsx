import * as React from "react";
import { EmployeeDataObject } from "../../App";
import { CustomTooltip } from "./CustomTooltip";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { css } from '@emotion/css'

export interface ChartViewProps {
  data: Array<EmployeeDataObject>;
}

export interface ChartViewState {
  title: string;
}

class ChartView extends React.Component<ChartViewProps, ChartViewState> {
  constructor(props: ChartViewProps) {
    super(props);
    this.state = { title: "This is bar chart" };
  }

  render() {
    return (
      <>
        <div className={css`width: 100%`}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart width={1200} height={700} data={this.props.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="location" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar yAxisId="left" dataKey="prevSalary" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="currSalary" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  }
}

export default ChartView;

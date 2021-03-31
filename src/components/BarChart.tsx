import * as React from 'react';

export interface BarChartProps {
    
}
 
export interface BarChartState {
    title: string
}
 
class BarChart extends React.Component<BarChartProps, BarChartState> {
    constructor(props: BarChartProps) {
        super(props);
        this.state = { title : "This is bar chart"  };
    }
    render() { 
        return ( <>
        <h1> {this.state.title}</h1>
        </> );
    }
}
 
export default BarChart;
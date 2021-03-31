import * as React from "react";
import { Checkbox, Row, Col, Button } from "antd";

export interface FiltersProps {
  filters: Array<string>;
  applyFilters: Function

}

export interface FiltersState {
  title: string;
}

class Filters extends React.Component<FiltersProps, FiltersState> {
  constructor(props: FiltersProps) {
    super(props);
    this.state = { title: "Filter" };
  }

  onChange = (checkedValues: any) => {
    this.props.applyFilters(checkedValues)
  };
  render() {
    return (
      <>
        <h3>Filters</h3>
        <Checkbox.Group style={{ width: "100%" }} onChange={this.onChange}>
          <Row>
            {this.props.filters.map((eachFilter) => (
              <Col span={8}>
                <Checkbox value={eachFilter}>{eachFilter}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      
      </>
    );
  }
}

export default Filters;

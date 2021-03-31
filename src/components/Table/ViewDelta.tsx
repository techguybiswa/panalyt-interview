import * as React from "react";
export interface ViewDeltaProps {
  delta?: number;
}

export interface ViewDeltaState {}

class ViewDelta extends React.Component<ViewDeltaProps, ViewDeltaState> {
  constructor(props: ViewDeltaProps) {
    super(props);
  }
  getSign = (delta?: number) => {
    if (delta == undefined) {
      return null;
    }
    if (delta >= 0) {
      return "+";
    }
  };
  getBackgroundColor = (delta?: number) => {
    if (delta == undefined) {
      return <p>Not defined</p>;
    }
    if (delta == 0) {
      return "yellow";
    } else if (delta < 0) {
      return "#FFA500";
    } else if (delta > 0) {
      return "#65f72c";
    }
  };
  render() {
    const { delta } = this.props;

    return (
      <div
        style={{
          backgroundColor: `${this.getBackgroundColor(delta)}`,
          borderRadius: "28px",
          color: "black",
          height: "40px",
          paddingTop: "5px",
          margin: "0 auto",
          maxWidth: "200px"
        }}
      >
        {this.getSign(delta)}{delta}
      </div>
    );
  }
}

export default ViewDelta;

import * as React from "react";
import {getSign, getBackgroundColor} from "../../helper/helper"
export interface ViewDeltaProps {
  delta?: number;
}

export interface ViewDeltaState {}

class ViewDelta extends React.Component<ViewDeltaProps, ViewDeltaState> {
  constructor(props: ViewDeltaProps) {
    super(props);
  }

  render() {
    const { delta } = this.props;

    return (
      <div
        style={{
          backgroundColor: `${getBackgroundColor(delta)}`,
          borderRadius: "28px",
          color: "black",
          height: "40px",
          paddingTop: "5px",
          margin: "0 auto",
          maxWidth: "200px"
        }}
      >
        {getSign(delta)}{delta}
      </div>
    );
  }
}

export default ViewDelta;

import * as React from "react";
import { getSign, getBackgroundColor } from "../../helper/helper";
import { css } from "@emotion/css";

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
        className={css`
          background-color: ${getBackgroundColor(delta)};
          border-radius: 28px;
          color: black;
          height: 40px;
          padding-top: 5px;
          margin: 0 auto;
          max-width: 150px;
        `}
      >
        {getSign(delta)}
        {delta}
      </div>
    );
  }
}

export default ViewDelta;

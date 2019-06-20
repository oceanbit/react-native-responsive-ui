import { Component } from "react";
import { Dimensions, ScaledSize } from "react-native";

interface ResponsiveComponentProps {}

interface ResponsiveComponentState {
  window: ScaledSize;
}

export default abstract class ResponsiveComponent extends Component<
  ResponsiveComponentProps,
  ResponsiveComponentState
> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    window: Dimensions.get("window")
  };

  componentWillMount() {
    Dimensions.addEventListener("change", this.onDimensionChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onDimensionChange);
  }

  onDimensionChange = (dims: ResponsiveComponentState) => this.setState(dims);
}

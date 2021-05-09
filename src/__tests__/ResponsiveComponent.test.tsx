import React from "react";
import { Dimensions, Text, View } from "react-native";
import { render } from "@testing-library/react-native";

import ResponsiveComponent from "../ResponsiveComponent";

class RespTestComp extends ResponsiveComponent {
  render() {
    const { width, height } = this.state.window;
    return (
      <View>
        <Text>Width: {width}</Text>
        <Text>Height: {height}</Text>
      </View>
    );
  }
}

describe("ResponsiveComponent", () => {
  test("should display proper sizing", async () => {
    Dimensions.set({ height: 100, width: 100 });

    const { queryByText } = render(<RespTestComp />);

    expect(queryByText("Width: 100")).toBeTruthy();
    expect(queryByText("Height: 100")).toBeTruthy();

    Dimensions.set({ height: 200, width: 200 });

    expect(queryByText("Width: 200")).toBeTruthy();
    expect(queryByText("Height: 200")).toBeTruthy();
  });
});

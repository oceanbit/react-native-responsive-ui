import React from "react";
import { Dimensions, Text, View } from "react-native";
import { render } from "@testing-library/react-native";

import useDimensions from "../useDimensions";

const DimensionsComp = () => {
  const { width, height } = useDimensions();

  return (
    <View>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
};

test("useDimensions should get proper initial dimensions", async () => {
  const { queryByText } = render(<DimensionsComp />);

  expect(queryByText("Width: 100")).toBeTruthy();
  expect(queryByText("Height: 100")).toBeTruthy();
});

test("useDimensions should handle changes in dimention", async () => {
  const { queryByText } = render(<DimensionsComp />);

  expect(queryByText("Width: 100")).toBeTruthy();
  expect(queryByText("Height: 100")).toBeTruthy();

  Dimensions.set({ height: 120, width: 120 });

  expect(queryByText("Width: 120")).toBeTruthy();
  expect(queryByText("Height: 120")).toBeTruthy();
});

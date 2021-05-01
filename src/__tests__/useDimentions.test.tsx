import React from "react";
import { Text, View } from "react-native";
import { render, waitFor } from "@testing-library/react-native";

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

  await waitFor(() => expect(queryByText("Width: 100")).toBeTruthy());

  expect(queryByText("Height: 100")).toBeTruthy();
});

import React from "react";
import { Dimensions, Text } from "react-native";
import { render } from "@testing-library/react-native";

import { useStylesheet, getStylesheet } from "../useStylesheet";

const styles = [
  {
    query: { minHeight: 500 },
    style: { container: { backgroundColor: "red" } },
  },
];

const StyleSheetComp = () => {
  const style = useStylesheet(styles);

  return <Text>{JSON.stringify(style)}</Text>;
};

describe("getStylesheet", () => {
  test("should return value when within constraints", () => {
    const height = 1000;
    const width = 1000;
    const style = getStylesheet({ width, height }, styles);
    expect(style.container.backgroundColor).toBe("red");
  });

  test("should not return value when not within constraints", () => {
    const height = 100;
    const width = 100;
    const style = getStylesheet({ width, height }, styles);
    expect(style?.container?.backgroundColor).not.toBe("red");
  });
});

describe("useStylesheet", () => {
  test("should return style when matched", async () => {
    Dimensions.set({ height: 1000, width: 1000 });

    const { queryByText } = render(<StyleSheetComp />);

    expect(queryByText(/red/)).toBeTruthy();
  });

  test("should not return style when matched", async () => {
    Dimensions.set({ height: 100, width: 100 });

    const { queryByText } = render(<StyleSheetComp />);

    expect(queryByText(/red/)).toBeFalsy();
  });
});

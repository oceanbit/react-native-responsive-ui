import { View } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { MediaQuery, mediaQuery } from "../src";

it("renders MediaQuery", () => {
  const tree = renderer
    .create(
      <View>
        <MediaQuery minHeight={450} orientation="portrait">
          test
        </MediaQuery>
      </View>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("should return true for right media query", () => {
  const result = mediaQuery({ minHeight: 500 }, 200, 700);

  expect(result).toBeTruthy();
});

it("should return true for false media query", () => {
  const result = mediaQuery({ minHeight: 500 }, 200, 300);

  expect(result).toBeFalsy();
});

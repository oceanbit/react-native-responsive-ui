import { View } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { MediaQuery, mediaQuery, getStylesheet } from "../src";

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

it("should return a stylesheet for getStyleSheet", () => {
  const result = getStylesheet({ width: 200, height: 700 }, [
    { query: { minHeight: 500 }, style: [{ color: "red" }] }
  ]);

  expect(result).toEqual(expect.arrayContaining([{ color: "red" }]));
});

it("should return a stylesheet for getStyleSheet", () => {
  const result = getStylesheet({ width: 200, height: 300 }, [
    { query: { minHeight: 500 }, style: [{ color: "red" }] }
  ]);

  expect(result).toEqual(expect.arrayContaining([]));
});

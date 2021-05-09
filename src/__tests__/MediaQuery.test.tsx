import React from "react";
import { Dimensions, Platform } from "react-native";
import { render } from "@testing-library/react-native";

import MediaQuery, { isInInterval, mediaQuery } from "../MediaQuery";
//
// const DimensionsComp = () => {
//   const { width, height } = useDimensions();
//
//   return (
//     <View>
//       <Text>Width: {width}</Text>
//       <Text>Height: {height}</Text>
//     </View>
//   );
// };

test("isInInterval", () => {
  expect(isInInterval(5, 1, 10)).toBeTruthy();
  expect(isInInterval(11, 1, 10)).toBeFalsy();
  expect(isInInterval(0, 1, 10)).toBeFalsy();
});

describe("mediaQuery", () => {
  test("minHeight should be false if too low", () => {
    const width = 100;
    const height = 100;
    const res = mediaQuery({ minHeight: 450 }, width, height);

    expect(res).toBeFalsy();
  });

  test("minHeight should be true if above", () => {
    const width = 100;
    const height = 500;
    const res = mediaQuery({ minHeight: 450 }, width, height);

    expect(res).toBeTruthy();
  });

  test("maxHeight should be true if lower", () => {
    const width = 100;
    const height = 100;
    const res = mediaQuery({ maxHeight: 450 }, width, height);

    expect(res).toBeTruthy();
  });

  test("maxHeight should be false if above", () => {
    const width = 100;
    const height = 500;
    const res = mediaQuery({ maxHeight: 450 }, width, height);

    expect(res).toBeFalsy();
  });

  test("minWidth should be false if too low", () => {
    const width = 100;
    const height = 100;
    const res = mediaQuery({ minWidth: 450 }, width, height);

    expect(res).toBeFalsy();
  });

  test("minWidth should be true if above", () => {
    const width = 500;
    const height = 100;
    const res = mediaQuery({ minWidth: 450 }, width, height);

    expect(res).toBeTruthy();
  });

  test("maxWidth should be true if lower", () => {
    const width = 100;
    const height = 100;
    const res = mediaQuery({ maxWidth: 450 }, width, height);

    expect(res).toBeTruthy();
  });

  test("maxWidth should be false if above", () => {
    const width = 500;
    const height = 100;
    const res = mediaQuery({ maxWidth: 450 }, width, height);

    expect(res).toBeFalsy();
  });

  test("minAspectRatio should be false if too low", () => {
    const width = 100;
    const height = 200;
    const res = mediaQuery({ minAspectRatio: 1 }, width, height);

    expect(res).toBeFalsy();
  });

  test("minAspectRatio should be true if above", () => {
    const width = 200;
    const height = 100;
    const res = mediaQuery({ minAspectRatio: 1 }, width, height);

    expect(res).toBeTruthy();
  });

  test("maxAspectRatio should be true if lower", () => {
    const width = 100;
    const height = 200;
    const res = mediaQuery({ maxAspectRatio: 1 }, width, height);

    expect(res).toBeTruthy();
  });

  test("maxAspectRatio should be false if above", () => {
    const width = 200;
    const height = 100;
    const res = mediaQuery({ maxAspectRatio: 1 }, width, height);

    expect(res).toBeFalsy();
  });

  test("minPixelRatio should be false if too low", () => {
    Dimensions.set({ pixelRatio: 0 });
    const res = mediaQuery({ minPixelRatio: 1 }, 0, 0);

    expect(res).toBeFalsy();
  });

  test("minPixelRatio should be true if above", () => {
    Dimensions.set({ pixelRatio: 2 });
    const res = mediaQuery({ minPixelRatio: 1 }, 0, 0);

    expect(res).toBeTruthy();
  });

  test("maxPixelRatio should be true if lower", () => {
    Dimensions.set({ pixelRatio: 0 });
    const res = mediaQuery({ maxPixelRatio: 1 }, 0, 0);

    expect(res).toBeTruthy();
  });

  test("maxPixelRatio should be false if above", () => {
    Dimensions.set({ pixelRatio: 2 });
    const res = mediaQuery({ maxPixelRatio: 1 }, 0, 0);

    expect(res).toBeFalsy();
  });

  test("orientation landscape should fail when expected", () => {
    const width = 100;
    const height = 200;
    const res = mediaQuery({ orientation: "landscape" }, width, height);

    expect(res).toBeFalsy();
  });

  test("orientation landscape should pass when expected", () => {
    const width = 200;
    const height = 100;
    const res = mediaQuery({ orientation: "landscape" }, width, height);

    expect(res).toBeTruthy();
  });

  test("orientation portrait should fail when expected", () => {
    const width = 200;
    const height = 100;
    const res = mediaQuery({ orientation: "portrait" }, width, height);

    expect(res).toBeFalsy();
  });

  test("orientation portrait should pass when expected", () => {
    const width = 100;
    const height = 200;
    const res = mediaQuery({ orientation: "portrait" }, width, height);

    expect(res).toBeTruthy();
  });

  test("platform should match", () => {
    Platform.OS = "web";
    const res = mediaQuery({ platform: "web" }, 0, 0);

    expect(res).toBeTruthy();
  });

  test("platform should fail", () => {
    Platform.OS = "ios";
    const res = mediaQuery({ platform: "web" }, 0, 0);

    expect(res).toBeFalsy();
  });

  test("condition should match", () => {
    const res = mediaQuery({ condition: true }, 0, 0);

    expect(res).toBeTruthy();
  });

  test("condition should fail", () => {
    const res = mediaQuery({ condition: false }, 0, 0);

    expect(res).toBeFalsy();
  });
});

// test("useDimensions should handle changes in dimention", async () => {
//   const { queryByText } = render(<DimensionsComp />);
//
//   expect(queryByText("Width: 100")).toBeTruthy();
//   expect(queryByText("Height: 100")).toBeTruthy();
//
//   Dimensions.set({ height: 120, width: 120 });
//
//   expect(queryByText("Width: 120")).toBeTruthy();
//   expect(queryByText("Height: 120")).toBeTruthy();
// });

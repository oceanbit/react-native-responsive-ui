import { View } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { MediaQuery } from "../src";

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
})
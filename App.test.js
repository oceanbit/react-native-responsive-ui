// @noflow
import React from "react";

import {AppNavigator} from "./App";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const rendered = renderer.create(<AppNavigator />).toJSON();
  expect(rendered).toBeTruthy();
});
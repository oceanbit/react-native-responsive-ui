# React Native Reponsive UI

[![CircleCI](https://circleci.com/gh/wcandillon/react-native-responsive-ui.svg?style=svg)](https://circleci.com/gh/wcandillon/react-native-responsive-ui)
[![npm version](https://badge.fury.io/js/react-native-responsive-ui.svg)](https://badge.fury.io/js/react-native-responsive-ui)


Building responsive UIs in React Native.

![example](https://raw.githubusercontent.com/wcandillon/react-native-responsive-ui/4637085802323386110a6352929147d11e1ca83c/example/components/images/example.gif)

An example is available via expo [here](https://expo.io/@wcandillon/react-native-responsive-ui).

## Installation

```bash
npm install react-native-responsive-ui --save
```

## Usage

The `MediaQuery` component renders its children only if the query evaluates to true (see list of properties below).
This component listens to changes in the window dimensions.
In the example below, we render the `Logo` component if the window's height has a minimum size of `450dp` and if the device orientation is in portrait mode (height is larger than width).

### Media Queries

```jsx
// @flow
import React, {Component} from "react";
import {View} from "react-native";
import {MediaQuery} from "react-native-responsive-ui";

export default class Login extends Component {
    render(): React$Element<*> {
        return <View>
            <MediaQuery minHeight={450} orientation="portrait">
                <Logo />
            </MediaQuery>
        </View>;
    }
}

```

#### Properties

| Name           | Type   | Description                                                                          |
|----------------|--------|--------------------------------------------------------------------------------------|
| minHeight      | dp     | Minimum height of the window.                                                        |
| maxHeight      | dp     | Maximum height of the window.                                                        |
| minWidth       | dp     | Minimum width of the window.                                                         |
| maxWidth       | dp     | Maximum width of the window.                                                         |
| minAspectRatio | number | Minimum aspect ration of the window (ratio of horizontal pixels to vertical pixels). |
| maxAspectRatio | number | Maximum aspect ration of the window (ratio of horizontal pixels to vertical pixels). |
| minPixelRatio  | number | Minimum device pixel density. See [PixelRatio](https://facebook.github.io/react-native/docs/pixelratio.html). |
| maxPixelRatio  | number | Maximum device pixel density. See [PixelRatio](https://facebook.github.io/react-native/docs/pixelratio.html). |
| orientation    | `portrait` or `landspace` | Indicates whether the viewport is in landscape (the display is wider than it is tall) or portrait (the display is square or taller than it is wide) mode. |
| platform       | string | Platform of the device.  See [Platform](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-module). |
| condition      | boolean | Abritrary boolean value that must be true for the media query to pass. |


### useDimensions

```jsx
import React from "react";
import {useDimensions} from "react-native-responsive-ui";

export default ({ children }) =>  {
  const {width, height} = useDimensions();
  console.log(`New window dimensions: ${width}x${height}`);
  return children;
};
```

### useStyle

```jsx
import React from "react";
import {useStyle} from "react-native-responsive-ui";

export default class Buttons extends ResponsiveComponent {
    render() {
        const style = useStyle(staticStyle)
        return <View style={style.btns}>
            <Button label="Login" primary style={style.btn} />
            <Button label="Sign Up" style={style.btn} />
        </View>;
    }
}

const staticStyle = [
  {
      query: { orientation: "landscape" },
      style: {
          btns: {
              flexDirection: "row"
          },
          btn: {
              flex: 1
          }
      }
  },
  {
      query: { orientation: "portrait" },
      style: {
          btns: {
              alignSelf: "stretch"
          },
          btn: {
              flex: 0
          }
      }
  }
];
```

### Media Query

`mediaQuery()` evaluates a media query and return true or false.
See example below.

```jsx
import {mediaQuery, useDimensions} from "react-native-responsive-ui";

const {width, height} = useDimensions();
mediaQuery({ orientation: "portrait", minHeight: 450 }, width, height)
```
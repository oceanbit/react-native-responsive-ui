# React Native Reponsive UI

Building reponsive UIs in React Native.

![https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/images%2Fexample.gif?alt=media&token=d80f2669-8223-437e-b5ac-4073e39cda98](example)

## What about existing packages?

* [react-native-responsive](https://github.com/adbayb/react-native-responsive): This library provides interesting APIs but it doesn't listen to changes in the app window.
This is problematic when changing the orientation of the device or when splitting screens.

* [react-native-responsive-styles](https://github.com/FormidableLabs/react-native-responsive-styles): This is a great library but it contains native depencies which prevents you to use it with expo for instance.
  
## What about the react-native-responsive package?

## Installation

```bash
npm install react-native-responsive-ui --save
```

## Usage

### Responsive Component

```jsx

```

#### Properties

| Name           | Type   | Description                                                                          |
|----------------|--------|--------------------------------------------------------------------------------------|
| minHeight      | dp     | Minimum height of the window.                                                        |
| maxHeight      | dp     | Maximum height of the window.                                                        |
| minWidth       | dp     | Minimum width of the window.                                                         |
| maxHeight      | dp     | Maximum height of the window.                                                        |
| minAspectRatio | number | Minimum aspect ration of the window (ratio of horizontal pixels to vertical pixels). |
| maxAspectRatio | number | Maximum aspect ration of the window (ratio of horizontal pixels to vertical pixels). |
| minPixelRatio  | number | Minimum device pixel density. See [PixelRatio](https://facebook.github.io/react-native/docs/pixelratio.html). |
| maxPixelRatio  | number | Maximum device pixel density. See [PixelRatio](https://facebook.github.io/react-native/docs/pixelratio.html). |
| orientation    | `portrait` or `landspace` | Indicates whether the viewport is in landscape (the display is wider than it is tall) or portrait (the display is square or taller than it is wide) mode. |
| platform       | string | Platform of the device.  See [Platform](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-module). |
| condition      | boolean | Abritrary boolean value that must be true for the media query to pass. |


### Media Queries

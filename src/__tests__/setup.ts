jest.mock("react-native", () => {
  const ReactNative = jest.requireActual("react-native");

  const Dimensions = {
    get: jest.fn().mockReturnValue({ width: 100, height: 100 }),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };

  // Must use `setPrototypeOf` and not spread, otherwise we get errors
  return Object.setPrototypeOf(
    {
      Dimensions,
    },
    ReactNative
  );
});

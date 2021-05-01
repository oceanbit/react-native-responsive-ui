jest.mock("react-native", () => {
  const { act } = jest.requireActual("@testing-library/react-native");
  const ReactNative = jest.requireActual("react-native");

  type mockChangeListener = ({
    window: { height, width, scale, fontSize },
  }: {
    window: {
      height: number;
      width: number;
      scale: number;
      fontSize: number;
    };
  }) => void;

  const eventListeners: Record<string, mockChangeListener> = {};

  const Dimensions = {
    get: jest.fn().mockReturnValue({ width: 100, height: 100 }),
    addEventListener: (eventName: string, onChange: mockChangeListener) => {
      eventListeners[eventName] = onChange;
    },
    removeEventListener: (eventName: string, onChange: mockChangeListener) => {
      delete eventListeners[eventName];
    },
    set: ({ height, width }: { height: number; width: number }) => {
      if (eventListeners.change) {
        act(() =>
          eventListeners.change({
            window: { height, width, scale: 1, fontSize: 16 },
          })
        );
      }
    },
  };

  // Must use `setPrototypeOf` and not spread, otherwise we get errors
  return Object.setPrototypeOf(
    {
      Dimensions,
    },
    ReactNative
  );
});

jest.mock("react-native", () => {
  const { act } = jest.requireActual("@testing-library/react-native");
  const ReactNative = jest.requireActual("react-native");

  type mockChangeListener = ({
    window: { height, width, scale, fontSize, pixelRatio },
  }: {
    window: {
      height: number;
      width: number;
      scale: number;
      fontSize: number;
      pixelRatio: number;
    };
  }) => void;

  const eventListeners: Record<string, mockChangeListener> = {};

  const mockDimensions = {
    height: 100,
    width: 100,
    scale: 1,
    fontSize: 16,
    pixelRatio: 1,
  };

  const Dimensions = {
    get: jest.fn().mockReturnValue(mockDimensions),
    addEventListener: (eventName: string, onChange: mockChangeListener) => {
      eventListeners[eventName] = onChange;
    },
    removeEventListener: (eventName: string) => {
      delete eventListeners[eventName];
    },
    set: ({
      height = mockDimensions.height,
      width = mockDimensions.width,
      pixelRatio = mockDimensions.pixelRatio,
    }: {
      height: number;
      width: number;
      pixelRatio?: number;
    }) => {
      act(() => {
        mockDimensions.height = height;
        mockDimensions.width = width;
        mockDimensions.pixelRatio = pixelRatio;
      });
      if (eventListeners.change) {
        act(() => {
          eventListeners.change({
            window: { height, width, scale: 1, fontSize: 16, pixelRatio },
          });
        });
      }
    },
  };

  const PixelRatio = {
    get: () => mockDimensions.pixelRatio,
    startDetecting: jest.fn(),
    roundToNearestPixel: (val: number) => val,
    getPixelSizeForLayoutSize: (val: number) => val,
    getFontScale: 1,
  };

  // Must use `setPrototypeOf` and not spread, otherwise we get errors
  return Object.setPrototypeOf(
    {
      Dimensions,
      PixelRatio,
    },
    ReactNative
  );
});

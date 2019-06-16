import { Platform, PixelRatio } from "react-native";

type Orientation = "landscape" | "portrait";

export interface MediaQuery {
  minHeight?: number;
  maxHeight?: number;
  minWidth?: number;
  maxWidth?: number;
  minAspectRatio?: number;
  maxAspectRatio?: number;
  minPixelRatio?: number;
  maxPixelRatio?: number;
  orientation?: Orientation;
  condition?: boolean;
  platform?: string;
}

const isInInterval = (value: number, min?: number, max?: number): boolean =>
  (min === undefined || value >= min) && (max === undefined || value <= max);

const mediaQuery = (
  {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    minAspectRatio,
    maxAspectRatio,
    orientation,
    platform,
    minPixelRatio,
    maxPixelRatio,
    condition
  }: MediaQuery,
  width: number,
  height: number
): boolean => {
  const currentOrientation: Orientation =
    width > height ? "landscape" : "portrait";
  return (
    isInInterval(width, minWidth, maxWidth) &&
    isInInterval(height, minHeight, maxHeight) &&
    isInInterval(width / height, minAspectRatio, maxAspectRatio) &&
    isInInterval(PixelRatio.get(), minPixelRatio, maxPixelRatio) &&
    (orientation === undefined || orientation === currentOrientation) &&
    (platform === undefined || platform === Platform.OS) &&
    (condition === undefined || condition)
  );
};

export default mediaQuery;

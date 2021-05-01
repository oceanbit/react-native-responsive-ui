import { PixelRatio, Platform } from "react-native";

import useDimensions from "./useDimensions";

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

export const isInInterval = (
  value: number,
  min?: number,
  max?: number
): boolean =>
  (min === undefined || value >= min) && (max === undefined || value <= max);

export const mediaQuery = (
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
    condition,
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

interface MediaQueryProps extends MediaQuery {
  children: React.ReactNode;
}

const MediaQuery = ({
  children,
  ...props
}: MediaQueryProps): React.ReactNode => {
  const { width, height } = useDimensions();
  const val = mediaQuery(props, width, height);
  if (val) {
    return children;
  }
  return null;
};

export default MediaQuery;

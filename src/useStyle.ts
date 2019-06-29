import { ScaledSize, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { mediaQuery, IMediaQuery } from "./MediaQuery";
import useDimensions from "./useDimensions";

type Style = ViewStyle | TextStyle | ImageStyle;

let id = 0;
const uniqueId = () => {
  id += 1;
  return id;
};

type ReponsiveStyles = Style & {
  [condition: string]: Style;
};

const selectStyle = (styles: ReponsiveStyles): Style => ({
  ...(Object.keys(styles)
    .filter(style => style.endsWith("-true"))
    .map(style => styles[style]) as Style)
});

export const useStyle = (
  styles: (cond: (query: IMediaQuery) => string) => ReponsiveStyles
): Style => {
  const dimensions = useDimensions();
  const cond = (query: IMediaQuery) =>
    `${uniqueId()}-${mediaQuery(dimensions, query)}`;
  return selectStyle(styles(cond));
};

export const getStyle = (
  dimensions: ScaledSize,
  styles: (cond: (query: IMediaQuery) => string) => ReponsiveStyles
): Style => {
  const cond = (query: IMediaQuery) =>
    `${uniqueId()}-${mediaQuery(dimensions, query)}`;
  return selectStyle(styles(cond));
};

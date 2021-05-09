import {merge as _merge, cloneDeep as _cloneDeep} from "lodash";
import type { ViewStyle, TextStyle, ImageStyle } from "react-native";

import { mediaQuery, MediaQuery } from "./MediaQuery";
import useDimensions from "./useDimensions";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
interface MediaQueryStyle<T> {
  query: MediaQuery;
  style: NamedStyles<T>;
}

export const getStylesheet = <T extends Record<string, unknown>>(
  { width, height }: { width: number; height: number },
  styles: MediaQueryStyle<T>[]
) => {
  const selectedStyles: NamedStyles<T>[] = [];
  styles.forEach((style) =>
    mediaQuery(style.query, width, height)
      ? selectedStyles.push(_cloneDeep(style.style))
      : undefined
  );
  return _merge.apply<null, NamedStyles<T>[], NamedStyles<T>>(
    null,
    selectedStyles
  );
};

export const useStylesheet = <T extends Record<string, unknown>>(
  styles: MediaQueryStyle<T>[]
) => {
  const dimensions = useDimensions();
  return getStylesheet(dimensions, styles);
};

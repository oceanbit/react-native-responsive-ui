// @flow
import * as _ from "lodash";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { mediaQuery, IMediaQuery } from "./MediaQuery";
import useDimensions from "./useDimensions";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
type MediaQueryStyle<T> = {
  query: IMediaQuery;
  style: NamedStyles<T>;
};

const useStylesheet = <T extends {}>(styles: MediaQueryStyle<T>[]) => {
  const { width, height } = useDimensions();
  const selectedStyles: NamedStyles<T>[] = [];
  styles.forEach(style =>
    mediaQuery(style.query, width, height)
      ? selectedStyles.push(style.style)
      : undefined
  );
  return _.merge.apply<null, NamedStyles<T>[], NamedStyles<T>>(
    null,
    selectedStyles
  );
};

export default useStylesheet;

import React from "react";
import mediaQuery, { MediaQuery as IMediaQuery } from "./mediaQuery";
import useDimensions from "./useDimensions";

interface MediaQueryProps extends IMediaQuery {
  children?: React.ReactNode;
}

export default ({ children, ...props }: MediaQueryProps) => {
  const { width, height } = useDimensions();
  const val = mediaQuery(props, width, height);
  if (val) {
    return children;
  }
  return null;
};

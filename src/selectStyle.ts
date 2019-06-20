import { ScaledSize } from "react-native";
import { mediaQuery, IMediaQuery } from "./MediaQuery";

interface ReponsiveStyle {
  [P in keyof IMediaQuery]: ViewStyle | TextStyle | ImageStyle
}

export const selectStyle = (
  dimensions: ScaledSize,
  style: ReponsiveStyle
) => {};

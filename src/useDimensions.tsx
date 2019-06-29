import { useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

const dims = Dimensions.get("window");

export default () => {
  const [dimensions, setDimensions] = useState(dims);

  const onChange = ({ window }: { window: ScaledSize }) =>
    setDimensions(window);

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => Dimensions.removeEventListener("change", onChange);
  }, []);

  return dimensions;
};

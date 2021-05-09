import { useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

const dims = Dimensions.get("window");

const useDimensions = () => {
  const [dimensions, setDimensions] = useState(dims);

  const onChange = ({
    window: { width, height, scale, fontScale },
  }: {
    window: ScaledSize;
  }) => setDimensions({ width, height, scale, fontScale });

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => Dimensions.removeEventListener("change", onChange);
  }, []);

  return dimensions;
};

export default useDimensions;

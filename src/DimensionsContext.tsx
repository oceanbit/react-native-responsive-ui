import React from "react";
import { Dimensions } from "react-native";

import useDimensions from "./useDimensions";

export const DimensionsContext = React.createContext(Dimensions.get("window"));

interface DimensionProviderProps {
  children: React.ReactNode;
}

export const DimensionsConsumer = DimensionsContext.Consumer;

export const DimensionsProvider = ({ children }: DimensionProviderProps) => {
  const dimensions = useDimensions();
  return (
    <DimensionsContext.Provider value={dimensions}>
      {children}
    </DimensionsContext.Provider>
  );
};

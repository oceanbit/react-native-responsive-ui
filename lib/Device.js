// @flow
import {Dimensions as RNDims} from "react-native";

export interface Dimensions {
    width: number,
    height: number,
    scale: number,
    fontScale: number
}

export interface AllDimensions {
    screen: Dimensions,
    window: Dimensions
}

export interface DimensionChangeSubscription {
    unsubscribe(): void
}

export default class Device {

    static subscribeToDimensionChanges(handler: (AllDimensions) => void): DimensionChangeSubscription {
        RNDims.addEventListener("change", handler);
        return {
            unsubscribe: () => RNDims.removeEventListener("change", handler)
        }
    }
}
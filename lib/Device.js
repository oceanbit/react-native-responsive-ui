// @flow
import {Dimensions as RNDims} from "react-native";

export interface Dimensions {
    width: number,
    height: number,
    scale: number,
    fontScale: number
}

export interface AllDimensions {
    window: Dimensions
}

export interface DimensionChangeSubscription {
    unsubscribe(): void
}

export default class Device {

    //  eslint-disable-next-line
    static subscribeToDimensionChanges(handler: (Object) => void): DimensionChangeSubscription {
        RNDims.addEventListener("change", handler);
        return {
            unsubscribe: () => RNDims.removeEventListener("change", handler)
        }
    }

    static get dimensions(): AllDimensions {
        const window = RNDims.get("window");
        return {
            window
        };
    }
}
// @flow
import {Platform, PixelRatio} from "react-native";

type Orientation = "landscape" | "portrait";

export interface MediaQuery {
    minHeight?: number,
    maxHeight?: number,
    minWidth?: number,
    maxWidth?: number,
    minAspectRatio?: number,
    maxAspectRatio?: number,
    minPixelRatio?: number,
    maxPixelRatio?: number,
    orientation?: Orientation,
    condition?: boolean,
    platform?: string
}

export default class MediaQuerySelector {

    static isInInterval(value: number, min?: number, max?: number): boolean {
        return (min === undefined || value >= min) && (max === undefined || value <= max);
    }

    static query(query: MediaQuery, width: number, height: number): boolean {
        // console.log(`width: ${width}, height: ${height}`);
        const currentOrientation: Orientation = width > height ? "landscape" : "portrait";
        const {
            minWidth, maxWidth, minHeight, maxHeight, minAspectRatio, maxAspectRatio, orientation, platform,
            minPixelRatio, maxPixelRatio, condition
        } = query;
        return MediaQuerySelector.isInInterval(width, minWidth, maxWidth) &&
            MediaQuerySelector.isInInterval(height, minHeight, maxHeight) &&
            MediaQuerySelector.isInInterval(width/height, minAspectRatio, maxAspectRatio) &&
            MediaQuerySelector.isInInterval(PixelRatio.get(), minPixelRatio, maxPixelRatio) &&
            (orientation === undefined || orientation === currentOrientation) &&
            (platform === undefined || platform === Platform.OS) &&
            (condition === undefined || condition);
    }
}
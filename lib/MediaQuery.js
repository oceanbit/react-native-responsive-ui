// @flow
import React, {Component} from "react";
import {Platform, PixelRatio} from "react-native";

import ResponsiveComponent from "./ResponsiveComponent";

export class MediaQuery extends ResponsiveComponent {
    props: {
        minHeight?: number,
        maxHeight?: number,
        minWidth?: number,
        maxWidth?: number,
        minAspectRatio?: number,
        maxAspectRatio?: number,
        minResolution?: number,
        maxResolution?: number,
        minPixelRatio?: number,
        maxPixelRatio?: number,
        orientation?: "landspace" | "portrait",
        platform?: string,
        children?: React$Element<*>
    }

    isInInterval(value: number, min?: number, max?: number): boolean {
        return (min === undefined || value >= min) && (max === undefined || value <= max);
    }

    render(): React$Element<*> | null {
        const {width, height} = this.state.window;
        console.log(`width: ${width}, height: ${height}`);
        const currentOrientation = width > height ? "landscape" : "portrait";
        const {
            minWidth, maxWidth, minHeight, maxHeight, minAspectRatio, maxAspectRatio, orientation, platform,
            minPixelRatio, maxPixelRatio
        } = this.props;
        if (
            this.isInInterval(width, minWidth, maxWidth) &&
            this.isInInterval(height, minHeight, maxHeight) &&
            this.isInInterval(width/height, minAspectRatio, maxAspectRatio) &&
            this.isInInterval(PixelRatio.get(), minPixelRatio, maxPixelRatio)    &&
            (orientation === undefined || orientation === currentOrientation) &&
            (platform === undefined || platform === Platform.OS)
        ) {
            return this.props.children;
        } else {
            return null;
        }
    }
}
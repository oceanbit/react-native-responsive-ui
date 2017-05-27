// @flow
import React, {Component} from "react";

import ResponsiveComponent from "./ResponsiveComponent";

export class MediaQuery extends ResponsiveComponent {
    props: {
        minHeight?: number,
        maxHeight?: number,
        minWidth?: number,
        maxWidth?: number,
        minAspectRatio?: number,
        maxAspectRatio?: number,
        orientation?: "landspace" | "portrait",
        children?: React$Element<*>
    }

    isInInterval(value: number, min?: number, max?: number): boolean {
        return (min === undefined || value >= min) && (max === undefined || value <= max);
    }

    render(): React$Element<*> | null {
        const {width, height} = this.state.window;
        const currentOrientation = width > height ? "landscape" : "portrait";
        const {
            minWidth, maxWidth, minHeight, maxHeight, minAspectRatio, maxAspectRatio, orientation
        } = this.props;
        if (
            this.isInInterval(width, minWidth, maxWidth) &&
            this.isInInterval(height, minHeight, maxHeight) &&
            this.isInInterval(width/height, minAspectRatio, maxAspectRatio) &&
            (orientation === undefined || orientation === currentOrientation)
        ) {
            return this.props.children;
        } else {
            return null;
        }
    }
}
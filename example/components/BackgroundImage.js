// @flow
import React from "react";
import {Image} from "react-native";

import {ResponsiveComponent} from "../../lib";

interface BGImageProps {
    source: number,
    children?: React$Element<*>
}

export default class BackgroundImage extends ResponsiveComponent {

    props: BGImageProps;

    render(): React$Element<*> {
        const {height, width} = this.state.window;
        return <Image source={this.props.source} style={{ height, width }}>{this.props.children}</Image>;
    }
}
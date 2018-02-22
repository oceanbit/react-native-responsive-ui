// @flow
import React, {Component} from "react";
import {StyleSheet} from "react-native";
import { merge } from "lodash";
import Device, {AllDimensions, DimensionChangeSubscription} from "./Device";
import MediaQuerySelector from "./MediaQuerySelector";
import type { MediaQueryStyle } from "./ResponsiveStyleSheet";

type State = {
    dims: AllDimensions,
    styles: StyleSheet.Styles
};

function calcStyles(width: number, height: number, styles: MediaQueryStyle[]): StyleSheet.Styles {
    const selectedStyles: StyleSheet.Styles[] = styles.reduce((styles, style) => {
            return MediaQuerySelector.query(style.query, width, height) ? styles.concat(style.style) : styles
    }, []);
    return merge.apply(null, selectedStyles);
}

export default function Responsive(styles: MediaQueryStyle[] = []): ReactClass<*> {
    const dims = Device.dimensions;
    const initialStyles = calcStyles(dims.window.width, dims.window.height, styles);
    return (WrapperComponent: ReactClass<*>) => {
        return class ResponsiveWrapper extends Component {
            state: State = {
                dims: dims,
                styles: initialStyles
            };
            subscription: DimensionChangeSubscription;

            componentWillMount() {
                this.subscription = Device.subscribeToDimensionChanges(dims => {
                    const {width, height} = dims.window;
                    const compStyles: StyleSheet.Styles[] = calcStyles(width, height, styles)
                    this.setState({dims, styles: compStyles})
                });
            }

            componentWillUnmount() {
                this.subscription.unsubscribe();
            }

            render = () => (
                <WrapperComponent window={this.state.dims.window}  responsiveStyles={this.state.styles} {...this.props} />
            )
        }
    }
}
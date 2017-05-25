// @flow
import React, {Component} from "react";

import Device, {AllDimensions, DimensionChangeSubscription} from "./Device";

export default class ResponsiveComponent extends Component {

    state: AllDimensions = Screen.dimensions;
    subscription: DimensionChangeSubscription;

    componentWillMount() {
        this.subscription = Screen.subscribeToDimensionChanges(dims => this.setState(dims));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
}
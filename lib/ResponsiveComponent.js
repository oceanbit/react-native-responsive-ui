// @flow
import {Component} from "react";

import Device, {AllDimensions, DimensionChangeSubscription} from "./Device";

export default class ResponsiveComponent extends Component {

    state: AllDimensions = Device.dimensions;
    subscription: DimensionChangeSubscription;

    componentWillMount() {
        this.subscription = Device.subscribeToDimensionChanges(dims => this.setState(dims));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
}
// @flow
import React from "react";
import ResponsiveComponent from "./ResponsiveComponent";

export default function Responsive(WrapperComponent: ReactClass<*>): ReactClass<*> {
    return class ResponsiveComponentWrapper extends ResponsiveComponent {
        render(): React$Element<*> {
            return <WrapperComponent window={this.state.window} {...this.props} />;
        }
    }
}
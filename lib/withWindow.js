import React from "react";
import ResponsiveComponent from './ResponsiveComponent';

export default function withWindow(WrappedComponent) {
  return class ResponsiveComponentWrapper extends ResponsiveComponent {
    render() {
      return <WrappedComponent window={this.state.window} {...this.props} />;
    }
  }
}

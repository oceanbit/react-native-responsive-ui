// @flow
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";

export default class Title extends Component {
    render(): React$Element<*> {
        return <View style={style.container}>
            {this.props.children}
        </View>;
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
});
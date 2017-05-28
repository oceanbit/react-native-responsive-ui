// @flow
import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";

export default class Title extends Component {
    render(): React$Element<*> {
        return <View style={style.container}>
            <Text>{this.props.children}</Text>
        </View>;
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
});
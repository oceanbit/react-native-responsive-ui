// @flow
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";

export default class Header extends Component {
    render(): React$Element<*> {
        return <View style={style.container}>
            {this.props.children}
        </View>;
    }
}

const style = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        height: 55,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 10
    }
});
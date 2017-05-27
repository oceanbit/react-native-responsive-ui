// @flow
import React, {Component} from "react";
import {TouchableHighlight, StyleSheet, Text} from "react-native";

export default class Button extends Component {
    props: {
        label: string,
        onPress?: () => void,
        style?: StyleSheet.Styles | Array<StyleSheet.Styles>
    };

    render(): React$Element<*> {
        const {onPress, style, label} = this.props;
        return <TouchableHighlight
            {...{ onPress }}
            style={[style, styles.container]}
            activeOpacity={.5}
            underlayColor="rgba(255, 255, 255, .2)"
        >
            <Text style={styles.text}>{label.toUpperCase()}</Text>
        </TouchableHighlight>;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6563a4",
        padding: 10,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
    },
    text: {
        color: "white",
        lineHeight: 24
    }
});
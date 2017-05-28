// @flow
import React, {Component} from "react";
import {TouchableHighlight, StyleSheet, View, Text} from "react-native";

export default class Button extends Component {
    props: {
        label?: string,
        onPress?: () => void,
        primary?: boolean,
        transparent?: boolean,
        style?: StyleSheet.Styles | Array<StyleSheet.Styles>,
        children?: React$Element<*>
    };

    render(): React$Element<*> {
        const {onPress, style, label, primary, transparent} = this.props;
        let bg = "#d667cd";
        if (primary) {
            bg = "#6563a4";
        } else if (transparent) {
            bg = "transparent";
        }
        return <TouchableHighlight
            {...{ onPress }}
            style={[style, styles.container, { backgroundColor: bg }]}
            activeOpacity={.5}
            underlayColor="rgba(255, 255, 255, .2)"
        >
            <View>
            { label && <Text style={styles.text}>{label.toUpperCase()}</Text> }
            { this.props.children }
            </View>
        </TouchableHighlight>;
    }
}

const styles = StyleSheet.create({
    container: {
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
// @flow
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";

import {BackgroundImage, Images} from "../components";

export default class Login extends Component {
    render(): React$Element<*> {
        return <BackgroundImage source={Images.login}>
            <View style={style.mask}>

            </View>
        </BackgroundImage>;
    }
}

const style = StyleSheet.create({
    mask: {
        flex: 1,
        backgroundColor: "rgba(80, 210, 194, .8)"
    }
});
// @flow
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {MediaQuery, MediaQueryStyleSheet, ResponsiveComponent} from "../../lib";

import {BackgroundImage, Images, Button} from "../components";
import Mark from "./Mark";
import Field from "./Field";

export default class Login extends ResponsiveComponent {
    render(): React$Element<*> {
        const style = this.getStyle();
        return <BackgroundImage source={Images.login}>
            <View style={mainStyle.container}>
                <MediaQuery orientation="portrait">
                    <Mark />
                </MediaQuery>
                <Field label="email" defaultValue="wcandillon@gmail.com" />
                <Field label="password" defaultValue="foobar" secureTextEntry last />
                <View style={style.btns}>
                    <Button label="Login" primary style={style.btn} />
                    <Button label="Sign Up" style={style.btn} />
                </View>
            </View>
        </BackgroundImage>;
    }

    getStyle() {
        return {
            ...MediaQueryStyleSheet.create({
                btns: {
                    flexDirection: "row"
                },
                btn: {
                    flex: 1
                }
            }, { orientation: "landscape" }),
            ...MediaQueryStyleSheet.create({
                btns: {
                    alignSelf: "stretch"
                },
                btn: {
                    flex: 0
                }
            }, { orientation: "portrait" })
        };
    }
}

const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(80, 210, 194, .8)",
        justifyContent: "center",
        alignItems: "center"
    }
});
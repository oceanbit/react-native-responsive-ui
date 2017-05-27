// @flow
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {MediaQuery} from "../../lib";

import {BackgroundImage, Images, Button} from "../components";
import Mark from "./Mark";
import Field from "./Field";

export default class Login extends Component {
    render(): React$Element<*> {
        return <BackgroundImage source={Images.login}>
            <View style={style.container}>
                <MediaQuery minHeight={450}>
                    <Mark />
                </MediaQuery>
                <Field label="email" defaultValue="wcandillon@gmail.com" />
                <Field label="password" secureTextEntry last />
                <Button label="Login" primary />

                <View style={{ flexDirection: "row", alignSelf: "stretch" }}>
                    <View style={{ flex: 1 }}>
                        <Button label="Login" primary />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button label="Sign Up" />
                    </View>
                </View>
            </View>
        </BackgroundImage>;
    }
}
// { alignSelf: "stretch" }
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(80, 210, 194, .8)",
        justifyContent: "center",
        alignItems: "center"
    }
});
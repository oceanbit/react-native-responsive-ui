// @flow
import React from "react";
import {View, StyleSheet} from "react-native";
import {MediaQuery, ResponsiveStyleSheet, responsive} from "../../lib";

import {BackgroundImage, Images, Button} from "../components";
import Mark from "./Mark";
import Field from "./Field";

@responsive
export default class Login extends React.Component {
    render(): React$Element<*> {
        // const {navigation} = this.props;
        const style = this.getStyle();
        return <BackgroundImage source={Images.login}>
            <View style={mainStyle.container}>
                <MediaQuery minHeight={450}>
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

    getStyle(): StyleSheet.Styles {
        return ResponsiveStyleSheet.select([
            {
                query: { orientation: "landscape" },
                style: {
                    btns: {
                        flexDirection: "row"
                    },
                    btn: {
                        flex: 1
                    }
                }
            },
            {
                query: { orientation: "portrait" },
                style: {
                    btns: {
                        alignSelf: "stretch"
                    },
                    btn: {
                        flex: 0
                    }
                }
            }
        ]);
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
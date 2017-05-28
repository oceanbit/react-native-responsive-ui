// @flow
import React, {Component} from "react";
import {Dimensions} from "react-native";
import {StackNavigator, DrawerNavigator} from "react-navigation";
import {AppLoading} from "expo";

import {Images} from "./example/components";
import Home from "./example/home";
import Drawer from "./example/drawer";
import Login from "./example/login";

export default class App extends Component {

    state = { ready: false };

    componentWillMount() {
        Promise
            .all(Images.downloadAsync())
            .then(() => this.setState({ ready: true }))
            .catch(error => console.log(error))
        ;
    }

    render(): React$Element<*> {
        return this.state.ready ? <AppNavigator /> : <AppLoading />;
    }
}

const MainNavigator = DrawerNavigator({
    Home: { screen: Home }
}, {
    drawerWidth: Dimensions.get("window").width,
    contentComponent: Drawer
});

const AppNavigator = StackNavigator({
    Login: { screen: Login },
    Main: { screen: MainNavigator }
}, { headerMode: "none" });

export {AppNavigator};
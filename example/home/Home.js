// @flow
import React, {Component} from "react";
import {View} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import {Container, Header, Button, Title} from "../components";

export default class Home extends Component {
    render(): React$Element<*> {
        const {navigation} = this.props;
        return <Container>
            <Header>
                <Button onPress={() => navigation.navigate("DrawerOpen")} transparent>
                    <EvilIcons name="navicon" size={32} />
                </Button>
                <Title>Home</Title>
                <View />
            </Header>
            <Container>

            </Container>
        </Container>;
    }
}
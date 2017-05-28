// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput, PixelRatio} from "react-native";

interface FieldProps {
    label: string,
    defaultValue?: string,
    children?: React$Element<*>,
    last?: boolean
}

export default class Field extends Component {

    state: {
        value: string
    };
    props: FieldProps;

    componentWillMount() {
        this.setValue(this.props.defaultValue || "");
    }

    @autobind
    setValue(value: string) {
        this.setState({ value });
    }

    render(): React$Element<*> {
        const {label, last} = this.props;
        const {value} = this.state;
        return <View style={[style.row, last ? { borderBottomWidth: 0 }: {}]}>
            <Text style={style.label}>{label.toUpperCase()}</Text>
            {
                React.Children.count(this.props.children) > 0
                    ?
                    this.props.children
                    :
                    <TextInput
                        onChangeText={this.setValue} {...{ value }} {...this.props}
                        style={style.input}
                        placeholderTextColor="rgba(255, 255, 255, .5)"
                    />
            }
        </View>;
    }
}

const style = StyleSheet.create({
    row: {
        borderBottomWidth: (1/PixelRatio.getPixelSizeForLayoutSize(1)),
        borderColor: "rgba(255, 255, 255, .5)",
        flexDirection: "row",
        alignItems: "center",
        height: 75
    },
    label: {
        color: "rgba(255, 255, 255, .5)",
        marginHorizontal: 20
    },
    input: {
        flex: 1,
        color: "white"
    }
});
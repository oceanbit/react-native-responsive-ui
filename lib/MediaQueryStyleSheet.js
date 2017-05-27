// @flow
import {StyleSheet} from "react-native";
import Device from "./Device";
import MediaQuerySelector, {MediaQuery} from "./MediaQuerySelector";

export default class MediaQueryStyleSheet {
    static create(style: StyleSheet.Styles, query: MediaQuery) {
        const {width, height} = Device.dimensions.window;
        const val = MediaQuerySelector.query(query, width, height);
        if (val) {
            return style;
        } else {
            return {};
        }
    }
}
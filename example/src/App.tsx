import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useStylesheet } from "react-native-responsive-ui";

export default function App() {
  useStylesheet([]);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

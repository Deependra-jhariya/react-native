import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <h1>Hello Deependra</h1>
        <Text>This is your first page!</Text>
        <Text>Today i start to create a page on Codesandbox.</Text>
        <Text>This is awesome easy to use..</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
    color: "red"
  }
});

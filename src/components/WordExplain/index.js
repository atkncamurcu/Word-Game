import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class WordExplain extends Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.explainText}>
          {this.props.data[this.props.row].explain}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10
  },
  explainText: {
    width: "100%",
    textAlign: "center",
    fontSize: 20
  }
});

export default WordExplain;

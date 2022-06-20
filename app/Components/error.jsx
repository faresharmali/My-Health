import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Error = ({ ErrorMessage }) => {
  return (
    <View style={styles.ErrorMessage}>
      <FontAwesome name="exclamation-triangle" size={20} color="#BE123C" />
      <Text style={styles.errorText}>{ErrorMessage}</Text>
    </View>
  );
};

export default Error;
const styles = StyleSheet.create({
  ErrorMessage: {
    width: "100%",
    height: 40,
    backgroundColor: "#FECDD3",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 10,
  },
  errorText: {
    marginLeft: 10,
    fontSize: 13,
  },
});

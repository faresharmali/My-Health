import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ProfilePic from "../../assets/avatars/ProfilePic.png";
const ScreenEntity = () => {
  return (
    <View style={styles.ScreenEntity}>
      <View>
        <Text style={styles.Hello}>Hello</Text>
        <Text style={styles.Username}>Username 👋</Text>
      </View>
      <Image style={styles.ProfilePic} source={ProfilePic} />
    </View>
  );
};

export default ScreenEntity;
const styles = StyleSheet.create({
  ScreenEntity: {
    width: "90%",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:25

  },
  Username: {
    fontSize: 20,
    color: "#348578",
    fontFamily: "Heebo",
    letterSpacing: 0.5,
    fontWeight:"700"
  },
  Hello: {
    fontSize: 15,
    color: "#348578",
    fontFamily: "Heebo",
    fontWeight: "700",
    letterSpacing: 0.7,
  },
  ProfilePic: {
    width: 50,
    height: 50,
  },
});

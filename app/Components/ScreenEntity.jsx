import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ProfilePic from "../../assets/avatars/ProfilePic.png";
const ScreenEntity = ({user}) => {
  return (
    <View style={styles.ScreenEntity}>
      <View>
        <Text style={styles.Hello}>Hello</Text>
        <Text style={styles.Username}>{user.firstName} {user.lastName}👋</Text>
      </View>
      <Image style={styles.ProfilePic} source={ProfilePic} />
    </View>
  );
};

export default ScreenEntity;
const styles = StyleSheet.create({
  ScreenEntity: {
    width: "100%",
    padding: 20,
    paddingTop:40,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#03968C"

  },
  Username: {
    fontSize: 20,
    color: "#ffff",
    fontFamily: "Heebo",
    letterSpacing: 0.5,
    fontWeight:"700"
  },
  Hello: {
    fontSize: 15,
    color: "#ffff",
    fontFamily: "Heebo",
    fontWeight: "700",
    letterSpacing: 0.7,
  },
  ProfilePic: {
    width: 50,
    height: 50,
  },
});

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Man from "../../assets/avatars/ProfilePic.png";
import React, { useState } from "react";
import edit from "../../assets/icons/edit.png";
import lock from "../../assets/icons/password-code.png";
import arrow from "../../assets/icons/right-arrow.png";
import arrowLeft from "../../assets/icons/left-arrow.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserProfile({ PageHandler,LoggedUser, navigation }) {
  const logout = async () => {
    await AsyncStorage.removeItem("loggedUser");
PageHandler(1);
  };
  const {user}=LoggedUser
  return (
    <View style={styles.container}>
      <View style={styles.ProfileContainer}>
        <View style={styles.backButton}>
          <Text style={styles.BackText}>Back</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.circle}
          >
            <Image style={styles.arrow2} source={arrowLeft} />
          </TouchableOpacity>
        </View>
        <Image source={Man} style={styles.profilePic} />
        <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>

        <View style={styles.sectionContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpdateUserInfos")}
            style={styles.section}
          >
            <View style={styles.sectionTitle}>
              <Image style={styles.sectionIcon} source={edit} />
              <Text style={styles.sectionText}>
                Change personnal informations
              </Text>
            </View>

            <Image style={styles.arrow} source={arrow} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpdatePassword")}
            style={styles.section}
          >
            <View style={styles.sectionTitle}>
              <Image style={styles.sectionIcon} source={lock} />
              <Text style={styles.sectionText}>Change password</Text>
            </View>
            <Image style={styles.arrow} source={arrow} />
          </TouchableOpacity>
         
        </View>
        <TouchableOpacity onPress={logout} style={styles.Logout}>
          <Image style={styles.LogoutIcon} source={logout} />

          <Text style={styles.sectionText}>Sing out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    zIndex: 10,
    backgroundColor: "#34857811",
  },
  ProfileContainer: {
    marginTop: "15%",
    height: "95%",
    width: "100%",
    backgroundColor: "#F6F8FA",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    padding: 10,
    elevation: 5,
    paddingTop: 30,
  },
  backButton: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignContent: "center",
    width: "100%",
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
  },
  userName: {
    fontSize: 25,
  },
  BackText: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
  },
  occupation: {
    fontSize: 15,
  },
  sectionContainer: {
    width: "90%",
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 15,
    elevation: 2,
  },
  Logout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "65%",
    height: 60,
    backgroundColor: "#fff",
    marginTop: 50,
    borderRadius: 15,
    elevation: 2,
  },
  sectionIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  arrow: {
    width: 20,
    height: 20,
  },
  arrow2: {
    width: 15,
    height: 15,
  },
  LogoutIcon: {
    width: 20,
    height: 20,
  },
  sectionText: {
    fontSize: 15,
    marginLeft: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
  },
  sectionTitle: {
    flexDirection: "row",
  },
});

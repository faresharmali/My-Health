import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar, Image, Text,TouchableOpacity } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import {
  MaterialIcons,
  Fontisto,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Icon } from "native-base";
import Logo from "../../assets/Logo3.png";
export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row-reverse", marginTop: 15, marginBottom: 30 }}>
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
            <Title style={styles.title}>My Health</Title>
            <Caption style={styles.caption}>Harmali Fares</Caption>
          </View>
          <Image source={Logo} style={styles.logo} />
        </View>
      </View>
      <Drawer.Section>
        <DrawerItem
          icon={() => (
            <Icon style={styles.icon} as={<MaterialIcons name="home" />} />
          )}
          label="Home"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon
              style={styles.icon}
              as={<MaterialIcons name="admin-panel-settings" />}
            />
          )}
          label="My Records"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("Administration");
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon
              style={styles.icon}
              as={<MaterialIcons name="admin-panel-settings" />}
            />
          )}
          label="Doctors"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("Administration");
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon
              style={styles.icon}
              as={<MaterialIcons name="admin-panel-settings" />}
            />
          )}
          label="Schedule"
          labelStyle={styles.label}
          onPress={() => {
            props.navigation.navigate("Administration");
          }}
        />
      
      </Drawer.Section>
      <TouchableOpacity style={styles.logoutContainer}> 
        <Icon
          style={styles.logoutIcon}
          as={<MaterialCommunityIcons name="logout" />}
        />
        <Text style={styles.logoutText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    letterSpacing: 0.7,
    marginRight: 10,
  },
  container: {
    height: "100%",
    zIndex: 999,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingTop: StatusBar.currentHeight,
    paddingRight: 20,
    backgroundColor: "#348578",
    height: "18%",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 15,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 3,
    textAlign: "left",
  },
  caption: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 17,
    marginTop: 5,
    textAlign: "left",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
  
    color: "#348578",
    textAlign: "center",
    fontSize: 26,
  },
  logo: {
    height: 62,
    width: 43,
    marginLeft: 10,
  },
  logoutContainer:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
  },
  logoutIcon:{
    color: "#348578",
    marginLeft:10,
        fontSize: 26,


  },
  logoutText:{
  fontSize:15,

  },

});

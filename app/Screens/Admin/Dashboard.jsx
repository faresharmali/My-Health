import { StyleSheet, Button, View } from "react-native";
import React, { useState,useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Administration from "./Administration";
import DrawerContent from "../../Navigation/DrawerContent"
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

const Drawer = createDrawerNavigator();
LogBox.ignoreAllLogs();

export default function Dashboard({PageHandler}) {
  console.error("from dashboard",PageHandler)
  return (
    <React.Fragment>
      <NavigationContainer>
        <Drawer.Navigator
         drawerPosition="left"
          drawerContent={(prop) => (
            <DrawerContent {...prop} PageHandler={PageHandler} />
          )}
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
   
          <Drawer.Screen
            name="Administration"
            component={(props) => (
              <Administration {...props} initialParams={{PageHandler:PageHandler}}  />
            )}
          />
         
        </Drawer.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 35,
    backgroundColor: "#232e42",
  },
  sidebar: {},
});

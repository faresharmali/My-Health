import "react-native-gesture-handler";
import React from "react";

import { StyleSheet, SafeAreaView, Text } from "react-native";
import Login from "./app/Auth/Login";
import { NativeBaseProvider } from "native-base";
import { useState } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import Dashboard from "./app/Screens/Admin/Dashboard.jsx"
import store from "./app/store";
export default function App() {

  const [CurrentPage, PageHandler] = useState(1);
  let [fontsLoaded] = useFonts({
    "Cairo": require("./assets/fonts/Cairo.ttf"),
    "Heebo": require("./assets/fonts/Heebo.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <Provider store={store}>
      <NativeBaseProvider style={styles.container}>
        {CurrentPage == 1 && <Login PageHandler={PageHandler} />}
        {CurrentPage == 2 && <Dashboard PageHandler={PageHandler} />}
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

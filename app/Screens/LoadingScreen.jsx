import React, { Component, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const LoadingScreen = ({ PageHandler, setLoggedUser }) => {
  const action = (doc, action) => {
    return {
      type: "updateLoggedUser",
      data: doc,
    };
  };
  const dispatch = useDispatch();
  useEffect(async () => {
    const loggedUser = await AsyncStorage.getItem("loggedUser");
    if (loggedUser) {
      setLoggedUser(JSON.parse(loggedUser));
      dispatch(action(JSON.parse(loggedUser)));

      PageHandler(2);
    } else {
      PageHandler(1);
    }
  }, []);
  return (
    <View style={styles.loading}>
      <Text style={styles.loadingText}>My Health+</Text>
    </View>
  );
};

export default LoadingScreen;

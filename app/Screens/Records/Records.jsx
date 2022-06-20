import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import BottomBar from "../../Navigation/BottomBar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { getPatientAsset } from "../../api/doctor";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Record from "../../Components/Record";
export default function Records({ route, navigation }) {
  const LoggedUser = useSelector((state) => state.LoggedUser);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    let api = await AsyncStorage.getItem("api");
    const res = await getPatientAsset(api, LoggedUser.user.userID);
    if (res.data.ok) {
      alert("ok");
      setAssets(res.data.data);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.Entity}>
        <Text style={styles.EntityText}>My Records</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.scheduleContainer}
      >
        {assets.map((d) => (
          <Record key={d.name} record={d} navigation={navigation} />
        ))}
      </ScrollView>
      <BottomBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03968C",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  EntityText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginTop: 25,
  },

  Entity: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  scheduleContainer: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    minHeight: "82.9%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerFilter: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: "#f5f5f5",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  filterItem: {
    padding: 6,
    backgroundColor: "#fff",
    borderRadius: 5,
    minWidth: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 3,
  },

  chartContainer: {
    width: "90%",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 3,
    paddingBottom: 10,
    paddingTop: 10,
  },
  chartTitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

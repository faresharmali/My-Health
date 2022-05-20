import "react-native-gesture-handler";
import React from "react";
import BottomBar from "../../Navigation/BottomBar";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Doctor1 from "../../../assets/Doctor1.png";
import Doctor2 from "../../../assets/Doctor2.png";
import Doctor3 from "../../../assets/Doctor3.png";
import Doctor4 from "../../../assets/Doctor4.png";
import Doctor5 from "../../../assets/Doctor5.png";
import Record from "../../Components/Record";
const Docs = [
  {
    name: "Ahmed",
    phone: "0660818412",
    Speciality: "Heart Specialist - Bouira",
    pic: Doctor1,
    date: "27/05/2019",
  },
  {
    name: "Farida",
    phone: "0660818412",
    Speciality: "Heart Specialist - Tizi Ouzou",
    pic: Doctor2,
    date: "27/05/2020",
  },
  {
    name: "Asmahan",
    phone: "0660818412",
    Speciality: "Heart Specialist - Algiers",
    pic: Doctor3,
    date: "09/04/2021",
  },
  {
    name: "Islam",
    phone: "0660818412",
    Speciality: "Heart Specialist - Oran",
    pic: Doctor4,
    date: "03/03/2022",
  },
];
export default function Records({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.Entity}>
        <Text style={styles.EntityText}>My Records</Text>
      </View>

      <ScrollView contentContainerStyle={{alignItems:"center",}} style={styles.scheduleContainer}>
        {Docs.map((d) => (
          <Record key={d.name} doctor={d} navigation={navigation} />
        ))}
    
      </ScrollView>
      <BottomBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A57A",
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
    maxHeight: "82.9%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

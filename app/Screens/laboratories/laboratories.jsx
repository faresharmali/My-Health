import "react-native-gesture-handler";
import React,{useEffect} from "react";
import BottomBar from "../../Navigation/BottomBar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ScreenEntity from "../../Components/ScreenEntity";
import { getDoctors } from "../../api/doctor";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LabPreview } from "../../Components/LaboratoryPreview";
export default function Laboratories({ navigation, LoggedUser }) {
  const [doctors, setDoctors] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const { user } = LoggedUser;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let api = await AsyncStorage.getItem("api");
    const res = await getDoctors(api,LoggedUser.token);
    if (res.data.ok) {
      setDoctors(res.data.docs.filter((doc) => doc.role == "laboratory"));
    }
  };
  return (
    <View style={styles.container}>
      <ScreenEntity user={user} />
      <View style={styles.content}>
        <Text style={styles.DoctorsTitle}>Top Facilities</Text>
        <View style={styles.doctorsList}>
          {doctors.map((d) => (
            <LabPreview key={d.id} navigation={navigation} doctor={d} />
          ))}
        </View>
      </View>

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
  Input: {
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  DoctorsTitle: {
    width: "90%",
    fontSize: 17,
    marginBottom: 10,
    color: "#03968C",
    fontWeight: "700",
    letterSpacing: 0.5,
    marginTop: 30,
  },
  doctorsList: {
    width: "90%",
    height: "100%",
    backgroundColor: "#fff",
  },
});

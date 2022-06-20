import "react-native-gesture-handler";
import React, { useEffect } from "react";
import BottomBar from "../../Navigation/BottomBar";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";
import ScreenEntity from "../../Components/ScreenEntity";
import { Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Input, Item } from "native-base";
import DoctorPreview from "../../Components/DoctorPreview";
import { getDoctors } from "../../api/doctor";
import { useState } from "react";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Doctors({ navigation }) {
  const LoggedUser = useSelector((state) => state.LoggedUser);

  const [doctors, setDoctors] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(async() => {
    setRefreshing(true);
    const res = await getDoctors(LoggedUser.token);
    if (res.data.ok) {
      setDoctors(res.data.docs.filter((doc) => doc.role == "doctor"));
    }
    setRefreshing(false)
  }, []);

  const styling = {
    backgroundColor: "#fff",
    borderRadius: 10,
    backgroundColor: "red",
  };

  const { user } = LoggedUser;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let api= await AsyncStorage.getItem('api')
    const res = await getDoctors(api,LoggedUser.token);
    if (res.data.ok) {
      setDoctors(res.data.docs.filter((doc) => doc.role == "doctor"));
    }
  };
  return (
    <View style={styles.container}>
      <ScreenEntity user={user} />
      <View style={styles.content}>
        <View style={styles.Input}>
          <Input
            InputLeftElement={
              <Icon
                style={{ marginRight: 10 }}
                as={<MaterialIcons name="search" />}
                size={5}
                ml="2"
                color="#348578"
              />
            }
            style={styles.input}
            w={{
              base: "90%",
              md: "50%",
            }}
            h={50}
            textAlign="left"
            placeholder="Search for a doctor"
            {...styling}
          />
        </View>
        <Text style={styles.DoctorsTitle}>Top Doctors</Text>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={styles.doctorsList}
        >
          {doctors.map((d) => (
            <DoctorPreview key={d.id} navigation={navigation} doctor={d} />
          ))}
        </ScrollView>
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
  },
  doctorsList: {
    width: "90%",
    height: "100%",
    backgroundColor: "#fff",
  },
});

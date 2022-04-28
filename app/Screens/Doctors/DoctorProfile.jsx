import "react-native-gesture-handler";
import React from "react";
import BottomBar from "../../Navigation/BottomBar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import map from "../../../assets/map.png";
export default function DoctorProfile({ route, navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.Entity}>
        <View style={styles.Head}>
          <Icon
            style={{ marginRight: 10 }}
            as={<AntDesign name="arrowleft" />}
            size={6}
            ml="2"
            color="#fff"
          />
          <Text style={styles.details}>Doctor Details</Text>
        </View>
        <View style={styles.docDetails}>
          <View style={styles.docInfos}>
            <Text style={styles.docName}>Dr . {route.params.doctor.name}</Text>
            <Text style={styles.docSpeciality}>Heart Specialist - Algiers</Text>
          </View>
          <Image style={styles.docImage} source={route.params.doctor.pic} />
        </View>
      </View>

      <View style={styles.Stats}>
        <View style={styles.Stat}>
          <Text style={styles.Title}>Patients</Text>
          <Text style={styles.number}>100+</Text>
        </View>
        <View style={styles.Stat}>
          <Text style={styles.Title}>Experience</Text>
          <Text style={styles.number}>10+</Text>
        </View>
        <View style={styles.Stat}>
          <Text style={styles.Title}>Rating</Text>
          <Text style={styles.number}>4.2</Text>
        </View>
      </View>
      <View style={styles.docPreview}>
        <Text style={styles.PreviewTitle}>About Doctor</Text>
        <Text style={styles.Preview}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </Text>
      </View>
      <View style={styles.docPreview}>
        <Text style={styles.PreviewTitle}>Location</Text>
        <Image style={styles.map} source={map} />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Give Access</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Head: {
    flexDirection: "row",
    width: "80%",
    marginTop:20
  },
  details: {
    fontSize: 17,
    color: "#fff",
    position: "absolute",
    left: "32%",
  },
  Entity: {
    width: "100%",
    height: "17%",
    backgroundColor: "#348578",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    paddingTop: 30,
  },
  docDetails: {
    width: "90%",
    height: 80,
    backgroundColor: "#fff",
    marginTop: 20,
    elevation: 5,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-between",
  },
  docImage: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  docName: {
    fontSize: 17,
    color: "#348578",
    fontWeight: "700",
  },
  docSpeciality: {
    fontSize: 15,
    color: "#348578",
    fontWeight: "600",
  },
  Stats: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 60,
  },
  Stat: {
    backgroundColor: "#34857811",
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "31%",
  },
  number: {
    fontSize: 17,
    fontWeight: "700",
    color: "#348578",
    marginTop: 5,
  },
  PreviewTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#348578",
    marginBottom: 10,
  },
  docPreview: {
    marginTop: 20,
    width: "90%",
  },
  Preview: {
    color: "#3485786B",
    fontSize: 15,
  },
  map: {
    width: "100%",
    height: 230,
    borderRadius: 15,
    marginTop: 10,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    height: 50,
    backgroundColor: "#348578",
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 17,
  },
});

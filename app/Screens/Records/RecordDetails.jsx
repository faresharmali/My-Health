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
import { AntDesign,MaterialCommunityIcons } from "@expo/vector-icons";
import map from "../../../assets/map.png";
export default function RecordDetails({ route, navigation }) {
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
          <Text style={styles.details}>Record Details</Text>
        </View>
        <View style={styles.docDetails}>
          <View style={styles.docInfos}>
            <Text style={styles.docName}>Dr . {route.params.doctor.name}</Text>
            <Text style={styles.docSpeciality}>Heart Specialist - Algiers</Text>
          </View>
          <Image style={styles.docImage} source={route.params.doctor.pic} />
        </View>
      </View>

      <View style={styles.RecordDetail}>
        <Text style={styles.RecordTitle}>Record Details</Text>

        <View style={styles.Record}>
          <Icon
            style={{ marginRight: 10 }}
            as={<MaterialCommunityIcons  name="star-four-points" />}
            size={6}
            ml="2"
            color="#348578"
          />
          <Text style={styles.recordItem}>Consultation Date : 25/08/2015</Text>
        </View>
        <View style={styles.Record}>
          <Icon
            style={{ marginRight: 10 }}
            as={<MaterialCommunityIcons  name="star-four-points" />}
            size={6}
            ml="2"
            color="#348578"
          />
          <Text style={styles.recordItem}>Allergies : Pollen Allergy</Text>
        </View>
        <View style={styles.Record}>
          <Icon
            style={{ marginRight: 10 }}
            as={<MaterialCommunityIcons  name="star-four-points" />}
            size={6}
            ml="2"
            color="#348578"
          />
          <Text style={styles.recordItem}>Diagnosis : headache</Text>
        </View>
        <View style={styles.Record}>
          <Icon
            style={{ marginRight: 10 }}
            as={<MaterialCommunityIcons  name="star-four-points" />}
            size={6}
            ml="2"
            color="#348578"
          />
          <Text style={styles.recordItem}>BloodGroup : AB+</Text>
        </View>
        <View style={styles.Record}>
          <Icon
            style={{ marginRight: 10 }}
            as={<MaterialCommunityIcons  name="star-four-points" />}
            size={6}
            ml="2"
            color="#348578"
          />
          <Text style={styles.recordItem}>Treatment  : Doliprane</Text>
        </View>
        <View style={styles.Record}>
          <Icon
            style={{ marginRight: 10 }}
            as={<MaterialCommunityIcons  name="star-four-points" />}
            size={6}
            ml="2"
            color="#348578"
          />
          <Text style={styles.recordItem}>Obervation  : None</Text>
        </View>
      </View>
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
    marginTop: 20,
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
    backgroundColor: "#00A57A",
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
    color: "#00A57A",
    fontWeight: "700",
  },
  docSpeciality: {
    fontSize: 15,
    color: "#00A57A",
    fontWeight: "600",
  },

  number: {
    fontSize: 17,
    fontWeight: "700",
    color: "#00A57A",
    marginTop: 5,
  },
  PreviewTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#00A57A",
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
  RecordDetail: {
    width: "90%",
    height: "70%",
    backgroundColor: "#f5f5f5",
    elevation: 2,
    borderRadius: 15,
    marginTop: 50,
  },
  RecordTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 19,
    marginTop: 10,
    color: "#00A57A",
    fontWeight: "700",
  },
  Record: {
    flexDirection: "row",
    marginTop: 20,
  },
  recordItem:{
      fontSize:17
  }
});

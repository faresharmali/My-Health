import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
    Fontisto ,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { Icon } from "native-base";
import Doctor1 from "../../assets/Doctor1.png";
const ScheduleITem = ({ doctor }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Dataontainer}>
        <Image style={styles.ProfilePic} source={doctor.pic} />
        <View>
          <Text style={styles.Username}>Dr . {doctor.name}</Text>
          <Text style={styles.Speciality}>{doctor.Speciality}</Text>
        </View>
      </View>
      <View style={styles.scheduleDate}>
          <View style={styles.dateItem}>
          <Icon
            as={<Fontisto  name="date" />}
            size={4}
            style={{marginLeft:-1}}
            ml="2"
            color="#348578"
          />
          <Text style={styles.dateInfos}>25/08/2022</Text>
          </View>
          <View  style={styles.dateItem}>
          <Icon
            as={<AntDesign name="clockcircleo" />}
            size={4}
            style={{marginLeft:-1}}
            ml="2"
            color="#348578"
          />
          <Text style={styles.dateInfos}>11:00 - 12:30</Text>
          </View>
      </View>
      <View style={styles.BtnContainer}>
        <TouchableOpacity style={{...styles.btn,backgroundColor:"#fff",borderWidth:0.2,borderColor:"#000"}}>
          <Text style={{...styles.btnText,color:"#000"}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Reschedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleITem;
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    backgroundColor: "#fff",
    backgroundColor: "#fff",
    elevation: 1.5,
    padding: 10,
    paddingLeft: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  Dataontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  BtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  Username: {
    fontSize: 17,
    color: "#348578",
    marginBottom: 5,
  },
  Hello: {
    fontSize: 15,
    color: "#0F1261",
  },
  Phone: {
    fontSize: 13,
    color: "#808080",
  },
  ProfilePic: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 35,
  },
  Speciality: {
    fontSize: 14,
    color: "#C3C4D8",
  },
  scheduleDate: {
    width: "100%",
    height: 40,
    backgroundColor: "#34857811",
    marginTop: 10,
    borderRadius: 10,
    flexDirection:"row",
    justifyContent:"space-around",
    alignContent:"center"
  },
  btn: {
    backgroundColor: "#348578",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "40%",
  },
  btnText: {
    fontSize: 13,
    color: "#fff",
  },
  dateItem: {
  flexDirection:"row",
  alignItems:"center",
  },
  dateInfos:{
      marginLeft:5
  }
});

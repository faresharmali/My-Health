import React, { Component } from "react";
import { StyleSheet, View, Text, Image ,TouchableOpacity} from "react-native";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { Icon } from "native-base";

const DoctorPreview = ({doctor,navigation}) => {
  return (
    <TouchableOpacity style={styles.Container} onPress={()=>navigation.navigate("DoctorProfile",{doctor})}>
      <Image style={styles.ProfilePic} source={doctor.pic} />
      <View>
        <Text style={styles.Username}>Dr . {doctor.name}</Text>
        <Text style={styles.Speciality}>{doctor.Speciality}</Text>
        <View style={styles.PhoneContainer}>
          <Icon
            as={<MaterialIcons name="phone" />}
            size={4}
            style={{marginLeft:-1}}
            ml="2"
            color="#348578"
          />
          <Text style={styles.Phone}> {doctor.phone}</Text>
          <View />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorPreview;
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "red",
    backgroundColor: "#fff",
    elevation: 1.5,
    padding: 10,
    borderRadius: 10,
    marginBottom:10
  },
  Username: {
    fontSize: 17,
    color: "#348578",
    marginBottom:5,
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
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 10,
  },
  Speciality: {
    fontSize: 14,
    color: "#C3C4D8",
  },
  PhoneContainer: {
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"flex-start",
    marginTop:5
  },
});

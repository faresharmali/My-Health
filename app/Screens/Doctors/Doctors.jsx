import "react-native-gesture-handler";
import React from "react";
import BottomBar from "../../Navigation/BottomBar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ScreenEntity from "../../Components/ScreenEntity";
import { Icon } from "native-base";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { Input, Item } from "native-base";
import DoctorPreview from "../../Components/DoctorPreview";
import Doctor1 from "../../../assets/Doctor1.png";
import Doctor2 from "../../../assets/Doctor2.png";
import Doctor3 from "../../../assets/Doctor3.png";
import Doctor4 from "../../../assets/Doctor4.png";
import Doctor5 from "../../../assets/Doctor5.png";
export default function Doctors({ navigation }) {
  const styling = {
    backgroundColor: "#fff",
    borderRadius: 10,
    backgroundColor: "red",
  };
  const Docs = [
    {
      name: "Ahmed",
      phone: "0660818412",
      Speciality: "Heart Specialist - Bouira",
      pic: Doctor1,
    },
    {
      name: "Farida",
      phone: "0660818412",
      Speciality: "Heart Specialist - Bouira",
      pic: Doctor2,
    },
    {
      name: "Asmahan",
      phone: "0660818412",
      Speciality: "Heart Specialist - Bouira",
      pic: Doctor3,
    },
    {
      name: "Islam",
      phone: "0660818412",
      Speciality: "Heart Specialist - Bouira",
      pic: Doctor4,
    },
    {
      name: "Yazid",
      phone: "0660818412",
      Speciality: "Heart Specialist - Bouira",
      pic: Doctor5,
    },
  ];
  return (
    <View style={styles.container}>
      <ScreenEntity />
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
      <View style={styles.doctorsList}>
        {Docs.map((d) => (
          <DoctorPreview navigation={navigation} doctor={d} />
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
    backgroundColor: "#00A57A",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Input: {
    marginTop: 20,
    marginBottom: 20,
 
  },
  content: {
   width:"100%",
   height:"100%",
   backgroundColor:"#fff",
   alignItems:"center",
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
  },
  DoctorsTitle: {
    width: "90%",
    fontSize: 17,
    marginBottom: 10,
    color: "#00A57A",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  doctorsList: {
    width: "90%",
    height: "50%",
    backgroundColor:"#fff"
  },
});

import "react-native-gesture-handler";
import React from "react";
import BottomBar from "../../Navigation/BottomBar";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from "react-native";
import { useState } from "react";
import Doctor1 from "../../../assets/Doctor1.png";
import Doctor2 from "../../../assets/Doctor2.png";
import Doctor3 from "../../../assets/Doctor3.png";
import ScheduleITem from "../../Components/Schedule";
const Docs = [
    {
      name: "Ahmed",
      phone: "0660818412",
      Speciality: "Heart Specialist - Bouira",
      pic:  Doctor1 ,
    },
    {
      name: "Farida",
      phone: "0660818412",
      Speciality: "Heart Specialist - Bouira",
      pic: Doctor2 ,
    },
    {
      name: "Asmahan",
      phone: "0660818412",
      Speciality: "Heart Specialist - Bouira",
      pic:  Doctor3 ,
    },

  ];
export default function Schedule({ route, navigation }) {
  const [isActive, setActive] = useState(1);
  return (
    <View style={styles.container}>

      <View style={styles.Entity}>
        <Text style={styles.EntityText}>Schedule</Text>
      </View>
      <View style={styles.FilterContainer}>
      <TouchableOpacity onPress={()=>setActive(0)} style={{...styles.FilterItem ,backgroundColor:isActive==0 ? "#348578" :"transparent"}}>
          <Text style={{...styles.FilterText,color:isActive==0 ? "#fff" :"#000"}}>Coming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setActive(1)} style={{...styles.FilterItem ,backgroundColor:isActive==1 ? "#348578" :"transparent"}}>
        <Text style={{...styles.FilterText,color:isActive==1 ? "#fff" :"#000"}}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setActive(2)} style={{...styles.FilterItem ,backgroundColor:isActive==2 ? "#348578" :"transparent"}}>
        <Text style={{...styles.FilterText,color:isActive==2 ? "#fff" :"#000"}}>Canceled</Text>
        </TouchableOpacity>
      </View>
      <BottomBar navigation={navigation} />

    <View style={styles.scheduleContainer}>
        {Docs.map((d)=>(
        <ScheduleITem key={d.name} doctor={d}/>

        ))}
       
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
    paddingTop:20,
  },

  EntityText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#348578",
    marginTop:25

  },
  FilterContainer: {
  width:"90%",
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:10,
  backgroundColor:"#34857811",
  padding:5,
  borderRadius:30
  },
  FilterItem:{
    padding:10,
    borderRadius:20,
    width:"30%",
    alignItems:"center"
  },
  FilterText:{
      fontSize:15
  },
  scheduleContainer:{
      width:'90%',
      marginTop:10,
  },
});

import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useSelector } from "react-redux";

import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import map from "../../../assets/map.png";
import { useDispatch } from "react-redux";
import { giveAccess, revokeAccess, getUser } from "../../api/doctor";
import docimg from "../../../assets/Doctor1.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Laboratory({ route, navigation }) {
  const LoggedUser = useSelector((state) => state.LoggedUser);
  const { doctor } = route.params;
  const action = (doc) => {
    return {
      type: "updateLoggedUser",
      data: doc,
    };
  };
  const dispatch = useDispatch();

  const give = async () => {
    let api = await AsyncStorage.getItem("api");
    console.log("from front", api);
    const res = await giveAccess(api, {
      PatientId: LoggedUser.user._id,
      DocId: doctor._id,
    });
    if (res.data.ok) {
      const res = await getUser(api, LoggedUser.user._id);
      dispatch(action({ ...LoggedUser, user: { ...res.data.data } }));
    } else {
    }
  };
  const revoke = async () => {
    let api = await AsyncStorage.getItem("api");
    const res = await revokeAccess(api, {
      PatientId: LoggedUser.user._id,
      DocId: doctor._id,
    });
    if (res.data.ok) {
      const res = await getUser(api, LoggedUser.user._id);
      dispatch(action({ ...LoggedUser, user: { ...res.data.data } }));
    } else {
    }
  };
  let permissions = JSON.parse(LoggedUser.user.doctorswithpermission);
  return (
    <View style={styles.container}>
      <View style={styles.Entity}>
        <View style={styles.Head}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              style={{ marginRight: 10 }}
              as={<AntDesign name="arrowleft" />}
              size={6}
              ml="2"
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.details}>Facility Details</Text>
        </View>
        <View style={styles.docDetails}>
          <View style={styles.docInfos}>
            <Text style={styles.docName}>
              {" "}
              {doctor.firstName} {doctor.lastName}
            </Text>
            <Text style={styles.docSpeciality}>{doctor.address}</Text>
          </View>
          <Image style={styles.docImage} source={docimg} />
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
        <Text style={styles.PreviewTitle}>About Facility</Text>
        <Text style={styles.Preview}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </Text>
      </View>
      <View style={styles.docPreview}>
        <Text style={styles.PreviewTitle}>Location</Text>
        <Image style={styles.map} source={map} />
      </View>
      {!permissions.includes(doctor._id) && (
        <TouchableOpacity onPress={() => give()} style={styles.btn}>
          <Text style={styles.btnText}>Give Access</Text>
        </TouchableOpacity>
      )}
      {permissions.includes(doctor._id) && (
        <TouchableOpacity onPress={() => revoke()} style={styles.btn}>
          <Text style={styles.btnText}>Remove Access</Text>
        </TouchableOpacity>
      )}
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
    backgroundColor: "#03968C",
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
    color: "#03968C",
    fontWeight: "700",
  },
  docSpeciality: {
    fontSize: 15,
    color: "#03968C",
    fontWeight: "600",
  },
  Stats: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 60,
  },
  Stat: {
    backgroundColor: "#03968C11",
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "31%",
  },
  number: {
    fontSize: 17,
    fontWeight: "700",
    color: "#03968C",
    marginTop: 5,
  },
  PreviewTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#03968C",
    marginBottom: 10,
  },
  docPreview: {
    marginTop: 20,
    width: "90%",
  },
  Preview: {
    color: "#03968C6B",
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
    backgroundColor: "#03968C",
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 17,
  },
});

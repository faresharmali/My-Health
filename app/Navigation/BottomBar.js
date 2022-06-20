import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon } from "native-base";
import {
  MaterialCommunityIcons,
  Ionicons ,
  FontAwesome,
  FontAwesome5
} from "@expo/vector-icons";
import React from "react";

export default function BottomBar(props) {
  return (
    <View style={styles.Container}>
    <View style={styles.BottomBar}>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Records")}>
          <View style={styles.bottomBarITem}>
            <Icon
              as={Ionicons }
              name="newspaper-outline"
              color={"#fff"}
              size={4}
            />

            <Text style={styles.bottomBarITemText}>Records</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Laboratories")}
        >
          <View style={styles.bottomBarITem}>
            <Icon
              as={FontAwesome}
              name="hospital-o"
              color={"#ffff"}
              size={4}
            />

            <Text style={styles.bottomBarITemText}>Facilities</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Doctors")}
        >
          <View style={styles.bottomBarITem}>
            <Icon
              as={FontAwesome}
              name="stethoscope"
              color={"#ffff"}
              size={4}
            />

            <Text style={styles.bottomBarITemText}>Doctors</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Profile")}
        >
          <View style={styles.bottomBarITem}>
            <Icon
              as={MaterialCommunityIcons}
              name="account-circle-outline"
              color={"#fff"}
              size={4}
            />

            <Text style={styles.bottomBarITemText}>Profile</Text>
          </View>
        </TouchableOpacity>
       
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
    backgroundColor: "#f5f5f5",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
  },
  BottomBar: {
    backgroundColor: "#03968C",
    width: "100%",
    height: 50,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",

  },
  bottomBarITem: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBarITemText: {
    color: "#fff",
    fontWeight: "600",
    fontSize:12
  },
  Circle: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: "#03968C",
    borderRadius: 35,
    shadowColor: "#000",
    elevation: 3,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

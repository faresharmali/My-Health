import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Input, Stack, Icon } from "native-base";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
export default function UpdatePassword({ route, navigation }) {
  const [errors, SetErrors] = useState({
    username: false,
    password: false,
    phone: false,
    confirmepassword: false,
    name: false,
    job: false,
  });

  const [userInfos, setuserInfos] = useState({
    name: "",
    phone: "",
    username: "",
    password: "",
    confirmepassword: "",
    job: "",
  });

  const handleUserInput = (text, name) => {
    setuserInfos({ ...userInfos, [name]: text });
  };

  const styling = {
    borderColor: "#000",
    borderWidth: 0.5,
    fontFamily: "Tajawal-Medium",
    fontSize: 14,
  };

  const CreateNewUser = async () => {};

  return (
    <View style={styles.Container}>
      <View style={styles.TitleContainer}>
        <View style={{ flexDirection: "row-reverse" }}>
          <Text style={styles.PageTitile}>Change password</Text>
        </View>
      </View>

      <Stack space={4} w="100%" alignItems="center">
        <Input
          InputLeftElement={
            <Icon
              style={{ marginRight: 10 }}
              as={<FontAwesome name="lock" />}
              size={5}
              ml="2"
              color="#03968C"
            />
          }
          w={{
            base: "95%",
            md: "25%",
          }}
          h={50}
          name="name"
          textAlign="left"
          placeholder="Old password"
          {...styling}
          borderWidth={1}
          borderColor={errors.name ? "#c21a0e" : "grey"}
          onChangeText={(text) => handleUserInput(text, "name")}
        />
        <Input
          InputLeftElement={
            <Icon
              style={{ marginRight: 10 }}
              as={<FontAwesome name="lock" />}
              size={5}
              ml="2"
              color="#03968C"
            />
          }
          w={{
            base: "95%",
            md: "25%",
          }}
          h={50}
          name="name"
          textAlign="left"
          placeholder="New password"
          {...styling}
          borderWidth={1}
          borderColor={errors.name ? "#c21a0e" : "grey"}
          onChangeText={(text) => handleUserInput(text, "name")}
        />
        <Input
          InputLeftElement={
            <Icon
              style={{ marginRight: 10 }}
              as={<FontAwesome name="lock" />}
              size={5}
              ml="2"
              color="#03968C"
            />
          }
          w={{
            base: "95%",
            md: "25%",
          }}
          h={50}
          name="name"
          textAlign="left"
          placeholder="Confirm password"
          {...styling}
          borderWidth={1}
          borderColor={errors.name ? "#c21a0e" : "grey"}
          onChangeText={(text) => handleUserInput(text, "name")}
        />
      </Stack>

      <Button style={styles.Button} mode="contained" onPress={CreateNewUser}>
        <Text style={{ fontSize: 16, marginLeft: 10 }}>Update </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "20%",
  },
  PageTitile: {
    fontSize: 20,
    marginRight: 10,
  },
  TitleContainer: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 0,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "red",
  },

  Button: {
    flexDirection: "row-reverse",
    height: 50,
    width: 230,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03968C",
    marginTop: 25,
    borderRadius: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 6,
  },
});

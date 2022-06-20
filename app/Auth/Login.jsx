import React, { useState } from "react";
import { Text, View, Image, Keyboard, TouchableOpacity } from "react-native";
import styles from "../Styles.js";
import { Input, Stack, Icon } from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import Docs from "../../assets/avatars/Docs.png";
import { LogUser } from "../api/auth.js";
import Error from "../Components/error.jsx";
import logo from "../../assets/avatars/logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

export default function Login({ setLoggedUser, PageHandler }) {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    api: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    show: false,
    ErrorMessage: "",
  });
  const action = (doc, action) => {
    return {
      type: "updateLoggedUser",
      data: doc,
    };
  };
  const dispatch = useDispatch();
  const Login = async () => {
    Keyboard.dismiss();
    if (
      userInput.email.trim() != "" &&
      userInput.password.trim() != "" &&
      userInput.api.trim() != ""
    ) {
      const Response = await LogUser(userInput);
      console.log(Response.data);
      if (Response.data.ok) {
        if (Response.data.user.role == "patient") {
          AsyncStorage.setItem("loggedUser", JSON.stringify(Response.data));
          AsyncStorage.setItem("api",userInput.api );
          dispatch(action(Response.data));
          setLoggedUser(Response.data);
          PageHandler(2);
        } else {
          alert("you are not a patient");
        }
      } else {
        setErrors({
          show: true,
          ErrorMessage: Response.data.error,
          email: true,
          api: true,
          password: true,
        });
      }
    } else {
      setErrors({
        show: true,
        ErrorMessage: "Please fill all fields",
        email: true,
        api: true,
        password: true,
      });
    }
  };

  const handleUserInput = (Field, Input) => {
    setErrors({ ...errors, show: false, ErrorMessage: "", [Field]: false });
    setUserInput({ ...userInput, [Field]: Input });
  };
  return (
    <View style={styles.LoginPagecontainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.LoginIllustration} source={Docs} />
        <View style={styles.FormContainer}>
          <Image style={styles.logoimg} source={logo} />
          <Text style={styles.LoginSecondTitle}>
            <Text style={{ color: "#03968C" }}>Log in</Text> to your account
          </Text>
          <Stack marginTop={8} space={4} w="100%" alignItems="center">
            <Text style={styles.label}>Server Address</Text>
            <Input
              InputLeftElement={
                <Icon
                  style={{ marginRight: 10 }}
                  as={<Entypo name="network" />}
                  size={5}
                  ml="2"
                  color="#03968C"
                />
              }
              style={styles.input}
              w={{
                base: "100%",
                md: "25%",
              }}
              h={50}
              backgroundColor="#fff"
              textAlign="left"
              placeholder="Server Address"
              fontSize={17}
              borderColor={errors.email ? "#d60d0d" : "#e0e0e0"}
              onChangeText={(Input) => handleUserInput("api", Input)}
            />
            <Text style={styles.label}>Email Address</Text>
            <Input
              InputLeftElement={
                <Icon
                  style={{ marginRight: 10 }}
                  as={<MaterialIcons name="mail" />}
                  size={5}
                  ml="2"
                  color="#03968C"
                />
              }
              style={styles.input}
              w={{
                base: "100%",
                md: "25%",
              }}
              h={50}
              backgroundColor="#fff"
              textAlign="left"
              placeholder="Email"
              fontSize={17}
              borderColor={errors.email ? "#d60d0d" : "#e0e0e0"}
              onChangeText={(Input) => handleUserInput("email", Input)}
            />
            <Text style={styles.label}>Password</Text>

            <Input
              InputLeftElement={
                <Icon
                  style={{ marginRight: 10 }}
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml="2"
                  color="#03968C"
                />
              }
              w={{
                base: "100%",
                md: "25%",
              }}
              type={"password"}
              h={50}
              fontSize={17}
              textAlign="left"
              backgroundColor="#fff"
              borderColor={errors.password ? "#d60d0d" : "#e0e0e0"}
              placeholder="Password"
              onChangeText={(Input) => handleUserInput("password", Input)}
            />
          </Stack>
          {errors.show && <Error ErrorMessage={errors.ErrorMessage} />}
          <TouchableOpacity
            style={styles.Button}
            mode="contained"
            onPress={() => Login()}
          >
            <Text style={{ fontSize: 16, marginLeft: 10, color: "#fff" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

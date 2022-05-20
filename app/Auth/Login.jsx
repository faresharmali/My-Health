import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image,Keyboard } from "react-native";
import styles from "../Styles.js";
import { Input, Stack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import Docs from "../../assets/avatars/Docs.png";
import { LoginUSer } from "../api/auth.js";
export default function Login({ navigation, PageHandler }) {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const Login =async () => {
    Keyboard.dismiss()
    const Response=await LoginUSer(userInput)
    console.log(Response);
  };

  const handleUserInput = (Field, Input) => {
    setUserInput({ ...userInput, [Field]: Input });
  };
  return (
    <View style={styles.LoginPagecontainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.LoginIllustration} source={Docs} />
        <View style={styles.FormContainer}>
          <Text style={styles.LoginSecondTitle}>
            <Text style={{ color: "#00A57A" }}>Log in</Text> to your account
          </Text>
          <Stack marginTop={8} space={4} w="100%" alignItems="center">
            <Text style={styles.label}>Email Address</Text>
            <Input
              InputLeftElement={
                <Icon
                  style={{ marginRight: 10 }}
                  as={<MaterialIcons name="mail" />}
                  size={5}
                  ml="2"
                  color="#00A57A"
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
                  color="#00A57A"
                />
              }
              w={{
                base: "100%",
                md: "25%",
              }}
              type={"password"}

              h={50}
              textAlign="left"
              backgroundColor="#fff"
              placeholder="Password"
              onChangeText={(Input) => handleUserInput("password", Input)}
            />
          </Stack>
          <Text style={styles.ForgotPassword}>Forgot Password ?</Text>
          <Button
            style={styles.Button}
            mode="contained"
            onPress={() => Login()}
          >
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Login</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

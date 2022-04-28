import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "../Styles.js";
import Logo from "../../assets/Logo4.png";
import { Input, Stack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

export default function Login({ navigation, PageHandler }) {
  const Login = () => {
    PageHandler(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.Logo} source={Logo} />

        <Text style={styles.LoginTitle}>HealthCare </Text>
        <View style={styles.FormContainer}>
          <Text style={styles.LoginSecondTitle}>Welcome</Text>
          <Text style={styles.secondTitle}>
            Please provide your login credentials
          </Text>

          <Stack space={4} w="100%" alignItems="center">
            <Input
              InputLeftElement={
                <Icon
                  style={{ marginRight: 10 }}
                  as={<MaterialIcons name="mail" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              style={styles.input}
              w={{
                base: "100%",
                md: "25%",
              }}
              h={50}
              textAlign="left"
              placeholder="Email"
            />
            <Input
              InputLeftElement={
                <Icon
                  style={{ marginRight: 10 }}
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              w={{
                base: "100%",
                md: "25%",
              }}
              h={50}
              textAlign="left"
              placeholder="Password"
            />
          </Stack>
          <Button
            style={styles.Button}
            mode="contained"
            onPress={() => Login()}
          >
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Login</Text>
          </Button>
          <Text style={styles.ForgotPassword}>Forgot Password ?</Text>
        </View>
      </View>
    </View>
  );
}

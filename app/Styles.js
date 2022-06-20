import { StyleSheet } from "react-native";
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  LoginPagecontainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#03968C",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  // login page Design :
  logoContainer: {
    paddingTop: "15%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#03968C",
    minHeight: "100%",
  },
  FormContainer: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    height: "85%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    position: "absolute",
    bottom: 0,
  },
  LoginTitle: {
    fontSize: 25,
    margin: 10,
    color: "#fff",
    margin: 0,
    fontFamily:"RobotoFlex-wght",

  },
  Logo: {
    width: 90,
    height: 75,
  },
  LoginIllustration: {
    width: "60%",
    height: 130,
    position: "absolute",
    bottom: "84%",
  },

  Button: {
    flexDirection: "row-reverse",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03968C",
    marginTop: 25,
    borderRadius: 10,
    fontFamily:"RobotoFlex-wght",

  },
  LoginSecondTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: "#313552",
    fontFamily: "RobotoFlex-wght",
  },
  ForgotPassword: {
    marginTop: 20,
    fontSize: 15,
    width:"100%",
    textAlign:"right"
  },
  secondTitle: {
    marginBottom: 25,
    fontSize: 15,
  },
  label: {
    width: "100%",
    fontWeight: "600",
    fontFamily: "RobotoFlex-wght",
  },
  logoimg:{
    width:80,
    height:70,
    marginBottom:10
  },
  loading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#03968C",

  },
  loadingText:{
    color:"#fff",
    fontSize:17
  }
});

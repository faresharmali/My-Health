import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Doctors from "../Doctors/Doctors.jsx";
const Stack = createStackNavigator();
const TransitionFromBottom = { ...TransitionPresets.ModalSlideFromBottomIOS };
const slideFromRight = { ...TransitionPresets.SlideFromRightIOS };
const scaleFromCenter = { ...TransitionPresets.ScaleFromCenterAndroid };
import DoctorProfile from "../Doctors/DoctorProfile.jsx";
import UserProfile from "../UserProfile.jsx";
import Records from "../Records/Records.jsx";
import RecordDetails from "../Records/RecordDetails.jsx";
import Laboratories from "../laboratories/laboratories.jsx";
import UpdateUserInfos from "../../Forms/UpdateUserInfos.jsx";
import UpdatePassword from "../../Forms/updatePassword.jsx";
import Laboratory from "../laboratories/laboratory.jsx";
import { NavigationContainer } from "@react-navigation/native";

export default function Administration(props) {

  return (
    <NavigationContainer>

    <Stack.Navigator
      initialRouteName="Records"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "vertical",
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={slideFromRight}
        name="Doctors"
        component={(prop)=><Doctors {...prop} PageHandler={props.PageHandler} LoggedUser={props.LoggedUser} />}

      
      />
      <Stack.Screen
        options={TransitionFromBottom}
        name="DoctorProfile"
        component={(prop)=><DoctorProfile {...prop} PageHandler={props.PageHandler} LoggedUser={props.LoggedUser} />}

      />
   
      <Stack.Screen
        options={slideFromRight}
        name="Profile"
        component={(prop)=><UserProfile {...prop} PageHandler={props.PageHandler} LoggedUser={props.LoggedUser} />}
        
      />
      <Stack.Screen
        options={slideFromRight}
        name="Records"
        component={(prop)=><Records {...prop} PageHandler={props.PageHandler} loggedUser={props.loggedUser} />}

        
      />
      <Stack.Screen
        options={TransitionFromBottom}
        name="RecordDetails"
        component={(prop)=><RecordDetails {...prop} PageHandler={props.PageHandler} LoggedUser={props.LoggedUser} />}

        
      />
      <Stack.Screen
        options={slideFromRight}
        name="Laboratories"
        component={(prop)=><Laboratories {...prop} PageHandler={props.PageHandler} LoggedUser={props.LoggedUser} />}

        
      />
      <Stack.Screen
        options={TransitionFromBottom}
        name="UpdateUserInfos"
        component={(prop)=><UpdateUserInfos {...prop} PageHandler={props.PageHandler} LoggedUser={props.LoggedUser} />}

        
      />
      <Stack.Screen
        options={TransitionFromBottom}
        name="UpdatePassword"
        component={(prop)=><UpdatePassword {...prop} PageHandler={props.PageHandler} LoggedUser={props.LoggedUser} />}

        
      />
      <Stack.Screen
        options={TransitionFromBottom}
        name="Laboratory"
        component={(prop)=><Laboratory {...prop} PageHandler={props.PageHandler} LoggedUser={props.LoggedUser} />}

        
      />

    </Stack.Navigator>
    </NavigationContainer>

  );
}

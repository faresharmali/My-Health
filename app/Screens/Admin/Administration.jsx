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
import Schedule from "../Schedule/Schedule.jsx";
import UserProfile from "../UserProfile.jsx";
import Records from "../Records/Records.jsx";
import RecordDetails from "../Records/RecordDetails.jsx";
export default function Administration(props) {

  return (
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
        component={Doctors}
      
      />
      <Stack.Screen
        options={TransitionFromBottom}
        name="DoctorProfile"
        component={DoctorProfile}
      />
      <Stack.Screen
        options={slideFromRight}
        name="Schedule"
        component={Schedule}
      />
      <Stack.Screen
        options={slideFromRight}
        name="Profile"
        component={()=><UserProfile initialParams={{PageHandler:props.initialParams.PageHandler}} />}
        
      />
      <Stack.Screen
        options={slideFromRight}
        name="Records"
        component={Records}
        
      />
      <Stack.Screen
        options={TransitionFromBottom}
        name="RecordDetails"
        component={RecordDetails}
        
      />

    </Stack.Navigator>
  );
}

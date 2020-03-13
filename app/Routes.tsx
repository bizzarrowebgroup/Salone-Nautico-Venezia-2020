import * as React from "react";

import { IntroScreen } from "./screen/IntroScreen";
import { WelcomeScreen } from "./screen/WelcomeScreen";
import { WelcomeScreenIntro } from "./screen/WelcomeScreenIntro";
import { WelcomeScreenNotification } from "./screen/WelcomeScreenNotification";
import { DashboardScreen } from "./screen/DashboardScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={"none"} screenOptions={{gestureEnabled: false}}>
        <Stack.Screen name="Home" component={IntroScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="WelcomeIntro" component={WelcomeScreenIntro} />
        <Stack.Screen name="WelcomeNotification" component={WelcomeScreenNotification} />
        <Stack.Screen name="DashBoard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
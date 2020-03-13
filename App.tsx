import * as React from "react";

// import AssetExample from './components/AssetExample';

import { IntroScreen } from "./app/screen/IntroScreen";
import { WelcomeScreen } from "./app/screen/WelcomeScreen";
import { WelcomeScreenIntro } from "./app/screen/WelcomeScreenIntro";
import { WelcomeScreenNotification } from "./app/screen/WelcomeScreenNotification";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
        <Stack.Screen name="Home" component={IntroScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="WelcomeIntro" component={WelcomeScreenIntro} />
        <Stack.Screen name="WelcomeNotification" component={WelcomeScreenNotification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
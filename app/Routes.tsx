import * as React from "react";

import {IntroScreen} from "./screen/IntroScreen";
import {WelcomeScreen} from "./screen/WelcomeScreen";
import {WelcomeScreenIntro} from "./screen/WelcomeScreenIntro";
import {WelcomeScreenNotification} from "./screen/WelcomeScreenNotification";
import {DashboardScreen} from "./screen/DashboardScreen";

import {Header, HeaderMenu} from "./components/index";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Routes() {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode={"float"} screenOptions={{
        gestureEnabled: false
      }}>
      <Stack.Screen name="Home" component={IntroScreen} options={{
          headerShown: false
        }}/>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerShown: false
        }}/>
      <Stack.Screen name="WelcomeIntro" component={WelcomeScreenIntro} options={{
          headerShown: false
        }}/>
      <Stack.Screen name="WelcomeNotification" component={WelcomeScreenNotification} options={{
          headerShown: false
        }}/>
      <Stack.Screen name="DashBoard" component={DashboardScreen} options={{
          headerShown: false,
          // headerLeft: () => <HeaderMenu/>,
          // header: () => <Header/>,
          // headerBackground: () => <Header/>,
          // headerStyle: {
          //   borderBottomLeftRadius: 20,
          //   borderBottomRightRadius: 20
          // }
        }}/>
    </Stack.Navigator>
  </NavigationContainer>);
}

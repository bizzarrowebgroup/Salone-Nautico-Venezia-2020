import * as React from "react";
import {View,Text,ScrollView} from "react-native";

import IntroScreen from "./screen/IntroScreen";
import WelcomeScreen from "./screen/WelcomeScreen";
import WelcomeScreenIntro from "./screen/WelcomeScreenIntro";
import WelcomeScreenNotification from "./screen/WelcomeScreenNotification";
import DashboardScreen from "./screen/DashboardScreen";

import {SocialMedia,Header} from "./components/index";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator
} from "@react-navigation/drawer";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

interface Props {
  route: any;
  navigation: any;
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const testComponent: React.FC<Props> = props => {
  return(
    <View style={{flex:1}}>
      <View style={{flex:1,position:"absolute",zIndex:1}}>
        <Header onPress={()=>props.navigation.toggleDrawer()}/>
      </View>
    <ScrollView style={{flex:1,zIndex:-1,backgroundColor:"black"}} contentContainerStyle={{justifyContent:"center",alignItems:"center",marginTop:200}}>
        <Text style={{color:"white",fontSize:22}}>demo - {props.route.name}_Component</Text>
    </ScrollView>
    </View>
  );
} 

const DrawerDashContent: React.FC<Props> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <SocialMedia />
      {/* <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://salonenautico.venezia.it/")}
      /> */}
    </DrawerContentScrollView>
  );
}

const DashboardRoute: React.FC = () => {
  return(
    <Drawer.Navigator drawerType="front" drawerStyle={{
      backgroundColor: "white",
      width: 300,
      borderBottomRightRadius: 20,
      marginBottom: 40
    }} drawerContentOptions={{
      activeTintColor: "#001489",
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "white",
      inactiveTintColor: "lightgrey",
      itemStyle: {
        marginVertical: 0,
      },
      labelStyle: {
        fontSize: 20,
      }
    }} drawerContent={props => <DrawerDashContent {...props} />}>
      <Drawer.Screen name="HomeDash" options={{title:"Il Salone"}} component={DashboardScreen} />
      <Drawer.Screen name="Espositori" component={testComponent} />
      <Drawer.Screen name="Visitatori" component={testComponent} />
      <Drawer.Screen name="Eventi" component={testComponent} />
      <Drawer.Screen name="Partner" component={testComponent} />
      <Drawer.Screen name="Press Area" component={testComponent} />
      <Drawer.Screen name="News" component={testComponent} />
      <Drawer.Screen name="Contatti" component={testComponent} />
    </Drawer.Navigator>
  )
}

export default function Routes() {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="WelcomeIntro" headerMode={"float"} screenOptions={{
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
      <Stack.Screen name="DashBoard" component={DashboardRoute} options={{
          headerShown: false,
        }}/>
    </Stack.Navigator>
  </NavigationContainer>);
}

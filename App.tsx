import * as React from "react";
import * as SplashScreen from 'expo-splash-screen'

// import { YellowBox } from "react-native";
// import AssetExample from "./components/AssetExample";
// YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
import Routes from "./app/Routes";
import { AnimatedAppLoader } from "./app/components"

SplashScreen.preventAutoHide();

export default function App() {
  return (
    <AnimatedAppLoader image={require("./assets/splash.png")}>
      <Routes />
    </AnimatedAppLoader>
  );
}
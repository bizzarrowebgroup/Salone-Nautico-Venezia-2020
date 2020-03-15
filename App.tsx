import * as React from "react";
import { SplashScreen } from "expo";

// import { YellowBox } from "react-native";
// import AssetExample from "./components/AssetExample";
// YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
import { Routes } from "./app/index";
import { AnimatedAppLoader } from "./app/components"

SplashScreen.preventAutoHide();

export default function App() {
  return (
    <AnimatedAppLoader image={require("./assets/splash.png")}>
      <Routes />
    </AnimatedAppLoader>
  );
}
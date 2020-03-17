import React, { useEffect } from "react"
import { View, Image, StatusBar, ActivityIndicator } from "react-native"

import styles from "./IntroScreen.styles";

export interface Props {
  navigation: any;
}
const IntroScreen: React.FC<Props> = ({
  navigation
}) => {

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true)
    setTimeout(() => {
      navigation.navigate("Welcome")
    }, 500)
  }, [])

  return (
    <View style={styles.introbox}>
      <Image source={require("../../../assets/logo.png")} style={styles.imageLogo} />
      <ActivityIndicator color={"white"} animating size={"large"} style={{ marginVertical: 20 }} />
    </View>
  )
}

export default IntroScreen

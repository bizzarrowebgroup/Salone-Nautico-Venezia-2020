import React, { useEffect } from "react"
import { View, StyleSheet, Image, StatusBar, ActivityIndicator } from "react-native"

const styles = StyleSheet.create({
  introbox: {
    flex: 1,
    backgroundColor: "#041a4c",
    alignItems: "center",
    justifyContent: "center"
  },
  imageLogo: {
    width: 276,
    height: 173
  },
})

export interface Props {
  navigation: any;
}
const IntroScreen: React.FC<Props> = ({
  navigation
}) => {

  useEffect(() => {
    StatusBar.setBarStyle("light-content",true)
    setTimeout(()=>{
      navigation.navigate("Welcome")
    },3000)
  }, [])

  return (
    <View style={styles.introbox}>
      <Image source={require("../../assets/logo.png")} style={styles.imageLogo} />
      <ActivityIndicator color={"white"} animating size={"large"} style={{marginVertical:20}}/>
    </View>
  )
}

export default IntroScreen

import React, { PureComponent } from "react"
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

export class IntroScreen extends PureComponent<Props> {
  componentDidMount(){
    StatusBar.setBarStyle("light-content",true)
    setTimeout(()=>{
      this.props.navigation.navigate("Welcome")
    },3000)
  }
  render(){
    return (
      <View style={styles.introbox}>
        <Image source={require("../../assets/logo.png")} style={styles.imageLogo} />
        <ActivityIndicator color={"white"} animating size={"large"} style={{marginVertical:20}}/>
      </View>
    )
  }
}

export default IntroScreen

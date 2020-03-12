import React, { PureComponent } from "react";
import { ImageBackground, View, StyleSheet, Image, Text, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

import ButtonSkip from "../components/ButtonSkip";

const styles = StyleSheet.create({
  introbox: {
    flex: 1,
    backgroundColor: "#041a4c",
  },
  imageLogo: {
    width: 276,
    height: 173,
    marginTop: height/4 - 50,
    alignSelf:"center",
  },
  testo1: {
    // marginTop: height/5,
    // marginBottom: 22,
    fontWeight: "bold",
    fontSize: 43,
    color: "white",
    textAlign: "left",
  },
  testo2: {
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
    textAlign: "left",
  },
  contenitoretesti: {
    marginHorizontal: 60,
    marginVertical: 40
  }
});

export class WelcomeScreenIntro extends PureComponent {
  render() {
    return (
      <ImageBackground source={require("../../assets/bg.png")} style={styles.introbox}>
        <View style={{width:"100%",height:"100%", backgroundColor:"#041a4c",opacity:.6,position:"absolute"}}/>
        <View style={{position:"absolute",top:60,right:25}}>
          <ButtonSkip />
        </View>
        <Image source={require("../../assets/logo.png")} style={styles.imageLogo} />
        <View style={styles.contenitoretesti}>
          <Text style={styles.testo1}>{"Benvenuto"}</Text>
          <Text style={styles.testo2}>{"Sei pronto a festeggiare l’arte ed \nil mare?"}</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default WelcomeScreenIntro
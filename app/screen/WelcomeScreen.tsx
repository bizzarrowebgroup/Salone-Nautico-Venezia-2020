import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text, Dimensions, Platform } from "react-native";

import { Card } from "../components";

let height = 0, MARGINTOP = 0;

if( Platform.OS === "web" ){
  height = Dimensions.get("window").height;
  MARGINTOP = 50
} else {
  height = Dimensions.get("screen").height;
  MARGINTOP = Math.round(height / 5) + 50;
}

const styles = StyleSheet.create({
  introbox: {
    flex: 1,
    backgroundColor: "#041a4c",
  },
  imageLogo: {
    width: 276,
    height: 173,
    marginTop: MARGINTOP,
    alignSelf: "center",
  },
  testoOrganizzato: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginTop: height / 5,
    marginBottom: 22,
  },
});

export interface Props {
  navigation: any;
}
const WelcomeScreen: React.FC<Props> = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate("WelcomeIntro")
    },3000)
  }, [])
  return (
    <View style={styles.introbox}>
      <Image source={require("../../assets/logo.png")} style={styles.imageLogo} />
      <Text style={styles.testoOrganizzato}>{"Evento organizzato da"}</Text>
      <Card isIntro={true} onPress={()=>navigation.navigate("WelcomeIntro")}/>
    </View>
  )
}

export default WelcomeScreen

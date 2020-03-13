import React, {PureComponent} from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions
} from "react-native";

const {height} = Dimensions.get("screen");

import ButtonSkip from "../components/ButtonSkip";
import Card from "../components/Card";

const styles = StyleSheet.create({
  introbox: {
    flex: 1,
    backgroundColor: "#041a4c"
  },
  imageLogo: {
    width: 276,
    height: 173,
    marginTop: height / 4 - 50,
    alignSelf: "center"
  },
  testo1: {
    fontWeight: "bold",
    fontSize: 43,
    color: "white",
    textAlign: "right"
  },
  testo2: {
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
    textAlign: "left"
  },
  contenitoretesti: {
    marginHorizontal: 60,
    marginVertical: 40
  }
});

interface Props {
  navigation: any;
}

export class WelcomeScreenNotification extends PureComponent<Props> {
  render() {
    const { navigation } = this.props;
    return (<ImageBackground source={require("../../assets/bg_2.png")} style={styles.introbox} resizeMode={"cover"}>
      <View style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#041a4c",
          opacity: 0.6,
          position: "absolute"
        }}/>
      <View style={{
          position: "absolute",
          top: 60,
          right: 25
        }}>
        <ButtonSkip buttonText={"skip"} />
        <ButtonSkip buttonText={"back"} onPress={()=>{navigation.goBack()}}/>
      </View>
      <Image source={require("../../assets/logo.png")} style={styles.imageLogo}/>
      <View style={styles.contenitoretesti}>
        <Text style={styles.testo1}>{"Abilita le Notifiche ora!"}</Text>
      </View>
      <Card 
        isIntro={false} 
        cardText={"Migliora la tua esperienza, rimani aggiornato!"} 
        cardButton={"ATTIVA LE NOTIFICHE"}
        onPress={()=>{navigation.navigate("Home")}}
      />
    </ImageBackground>);
  }
}

export default WelcomeScreenNotification;

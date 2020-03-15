import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions
} from "react-native";
// import { Updates } from "expo";

// import registerForPushNotificationsAsync from "../Notifications"

const { height } = Dimensions.get("screen");

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

const WelcomeScreenNotification: React.FC<Props> = ({
  navigation
}) => {
  const [notificationsOk, setnotificationsOk] = useState(false)
  const token = true
  useEffect(() => {
    if (token) {
      // token.toString() // this is the token of the push notifications :D
      navigation.navigate("DashBoard");
    }
  }, [])
  const onPressNotifications = async() => {
    console.log("pressed_push_notifications")
    // const token = await registerForPushNotificationsAsync(); use this without the Simulator
    
    if (token) {
      // token.toString() // this is the token of the push notifications :D
      setnotificationsOk(!notificationsOk)
    }
  }
  const onPressStartApp = () => {
    navigation.navigate("DashBoard");
  }
  return (<ImageBackground source={require("../../assets/bg_2.png")} style={styles.introbox} resizeMode={"cover"}>
    <View style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#041a4c",
      opacity: 0.6,
      position: "absolute"
    }} />
    {!notificationsOk && (<View style={{
      position: "absolute",
      top: 60,
      right: 25
    }}>
      {/* <ButtonSkip buttonText={"skip"} /> */}
      <ButtonSkip buttonText={"back"} onPress={() => { navigation.goBack() }} />
      {/* <ButtonSkip buttonText={"Reload"} onPress={() => { Updates.reload() }} /> */}
    </View>)}
    <Image source={require("../../assets/logo.png")} style={styles.imageLogo} />
    <View style={styles.contenitoretesti}>
      <Text style={styles.testo1}>{!notificationsOk ? "Abilita le Notifiche ora!" : "Grazie, procedi pure"}</Text>
    </View>
    <Card
      isIntro={false}
      cardText={!notificationsOk ? "Migliora la tua esperienza, rimani aggiornato!" : "🤗"}
      cardButton={!notificationsOk ? "ATTIVA LE NOTIFICHE" : "APRI L’APPLICAZIONE"}
      onPress={() => !notificationsOk ? onPressNotifications() : onPressStartApp()}
      doSmile={!notificationsOk}
    />
  </ImageBackground>);
}

export default WelcomeScreenNotification;

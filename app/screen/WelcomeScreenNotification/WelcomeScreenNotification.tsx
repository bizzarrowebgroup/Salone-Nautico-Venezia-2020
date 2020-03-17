import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
} from "react-native";
// import { Updates } from "expo";

// import registerForPushNotificationsAsync from "../Notifications"

import ButtonSkip from "../../components/ButtonSkip";
import Card from "../../components/Card";
import styles from "./WelcomeScreenNotification.styles";
import { t } from "../../utils";

interface Props {
  navigation: any;
}

const WelcomeScreenNotification: React.FC<Props> = ({
  navigation
}) => {
  const [notificationsOk, setnotificationsOk] = useState(false)
  const token = true
  useEffect(() => {
    // if (token) {
    //   // token.toString() // this is the token of the push notifications :D
    //   navigation.navigate("DashBoard");
    // }
  }, [])
  const onPressNotifications = async () => {
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
  return (<ImageBackground source={require("../../../assets/bg_2.png")} style={styles.introbox} resizeMode={"cover"}>
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
    <Image source={require("../../../assets/logo.png")} style={styles.imageLogo} />
    <View style={styles.contenitoretesti}>
      <Text style={styles.testo1}>{!notificationsOk ? t("FIRSTKEY") : t("SECONDKEY")}</Text>
    </View>
    <Card
      isIntro={false}
      cardText={!notificationsOk ? t("THIRDKEY") : "🤗"}
      cardButton={!notificationsOk ? t("FOURTHKEY") : t("FIFTKEY")}
      onPress={() => !notificationsOk ? onPressNotifications() : onPressStartApp()}
      doSmile={!notificationsOk}
    />
  </ImageBackground>);
}

export default WelcomeScreenNotification;

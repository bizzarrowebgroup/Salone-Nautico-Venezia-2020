import React, { useEffect } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
} from "react-native";

import { ButtonSkip } from "../../components";

import styles from "./WelcomeScreenIntro.styles";
import { t } from "../../utils";

export interface Props {
  navigation: any;
}

const WelcomeScreenIntro: React.FC<Props> = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("WelcomeNotification");
    }, 3000);
  }, [])

  const navigateTo = () => {
    navigation.navigate("WelcomeNotification");
  }
  return (<ImageBackground source={require("../../../assets/bg.png")} style={styles.introbox}>
    <View style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#041a4c",
      opacity: 0.6,
      position: "absolute"
    }} />
    <View style={{
      position: "absolute",
      top: 60,
      right: 25
    }}>
      <ButtonSkip onPress={() => navigateTo()} />
    </View>
    <Image source={require("../../../assets/logo.png")} style={styles.imageLogo} />
    <View style={styles.contenitoretesti}>
      <Text style={styles.testo1}>{t("WELCOMEKEY")}</Text>
      <Text style={styles.testo2}>
        {t("READYKEY")}
      </Text>
    </View>
  </ImageBackground>);
}

export default WelcomeScreenIntro;
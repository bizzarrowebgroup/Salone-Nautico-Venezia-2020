import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";

import { Card } from "../../components";

import styles from "./WelcomeScreen.styles";
import { t } from "../../utils";

export interface Props {
  navigation: any;
}

const WelcomeScreen: React.FC<Props> = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("WelcomeIntro")
    }, 500)
  }, [])
  return (
    <View style={styles.introbox}>
      <Image source={require("../../../assets/logo.png")} style={styles.imageLogo} />
      <Text style={styles.testoOrganizzato}>{t("CREATEDBY")}</Text>
      <Card isIntro={true} onPress={() => navigation.navigate("WelcomeIntro")} />
    </View>
  )
}

export default WelcomeScreen
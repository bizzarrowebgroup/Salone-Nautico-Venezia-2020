import React from "react";
import {StyleSheet, Image, TouchableWithoutFeedback} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  menuLogo: {
    width: 25,
    height: 15,
    // position: "absolute",
    left: 45,
    // top: Constants.statusBarHeight * 2 + 7.5,
  }
});

export type Props = {
  onPress?: () => void;
};

const HeaderMenu = (props : Props) => {
  const {onPress} = props;
  return (<TouchableWithoutFeedback onPress={onPress}>
    <Image source={require("../../assets/menu_icon.png")} style={styles.menuLogo}/>
  </TouchableWithoutFeedback>);
};

export default HeaderMenu;
import React from "react";
import {View, StyleSheet, Image, TouchableWithoutFeedback, Dimensions} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  headerBox: {
    height: Constants.statusBarHeight * 4,
    paddingTop: Constants.statusBarHeight,
    width: Dimensions.get("screen").width,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  imageLogo: {
    width: 150,
    height: 95,
    tintColor: "#001489"
  },
  menuLogo: {
    width: 30,
    height: 20,
    position: "absolute",
    left: 45,
    top: Constants.statusBarHeight * 2 + 7.5
  }
});

export type Props = {
  onPress?: () => void;
};

const Header: React.FC<Props> = ({
  onPress
}) => {
  return (<View style={styles.headerBox}>
    <Image source={require("../../assets/logo.png")} style={styles.imageLogo}/>
    <TouchableWithoutFeedback onPress={onPress}>
      <Image source={require("../../assets/menu_icon.png")} style={styles.menuLogo}/>
    </TouchableWithoutFeedback>
  </View>);
};

export default Header;
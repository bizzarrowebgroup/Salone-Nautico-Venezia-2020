import React from "react";
import {StyleSheet, Image, TouchableWithoutFeedback} from "react-native";

const styles = StyleSheet.create({
  menuLogo: {
    width: 25,
    height: 15,
    left: 45,
  }
});

export type Props = {
  onPress?: () => void;
};
const HeaderMenu: React.FC<Props> = ({
  onPress
}) => {
  return (<TouchableWithoutFeedback onPress={onPress}>
    <Image source={require("../../assets/menu_icon.png")} style={styles.menuLogo}/>
  </TouchableWithoutFeedback>);
};

export default HeaderMenu;
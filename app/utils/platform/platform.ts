import { Platform, Dimensions } from "react-native";

let Deviceheight = 0, MARGINTOP = 0;
if( Platform.OS === "web" ) {
  Deviceheight = Dimensions.get("window").height;
  MARGINTOP = 50
} else {
  Deviceheight = Dimensions.get("screen").height;
  MARGINTOP = Math.round(Deviceheight / 5) + 50;
}

export const isDevMode = __DEV__;
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;
export const marginTop = MARGINTOP;
const isSmallDevice = width < 375;

export default {
  isIOS,
  isAndroid,
  isDevMode,
  width,
  height,
  isSmallDevice,
  marginTop
};
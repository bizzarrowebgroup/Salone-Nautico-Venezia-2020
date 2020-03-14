import React from "react"
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native"
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

const SCREEN_HEIGHT = Dimensions.get("screen").height - Constants.statusBarHeight * 4;

const styles = StyleSheet.create({
    expoContainer: {
        flex: 1,
        backgroundColor: "white",
        height: SCREEN_HEIGHT
    },
    overBox: {
        flex: 1,
        // backgroundColor: "#3649b7",
        opacity: .5
    }
})
export interface Props {
    backGroundImage?: string;
    firstText?: string;
    firstBtn?: string;
    secondText?: string;
    secondBtn?: string;
    // onPress?: () => void;
}
const ExpositorCard: React.FC = (Props) => {
    return (
        <ImageBackground style={styles.expoContainer} source={require("../../assets/bg_4.png")}>
            {/* <View style={styles.overBox}/> */}
            <LinearGradient colors={["#3649b7","#000566"]} style={styles.overBox} />
        </ImageBackground>
    )
}

export default ExpositorCard


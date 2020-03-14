import React from "react"
import { StyleSheet, Text, Dimensions, ImageBackground } from "react-native"
import Constants from "expo-constants";
const SCREEN_HEIGHT = Dimensions.get("screen").height - Constants.statusBarHeight * 4;

const styles = StyleSheet.create({
    expoContainer: {
        flex: 1,
        backgroundColor: "white",
        height: SCREEN_HEIGHT
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
            <Text></Text>
        </ImageBackground>
    )
}

export default ExpositorCard


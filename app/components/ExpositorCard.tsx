import React from "react"
import { StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity } from "react-native"
// import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
// const SCREEN_HEIGHT = Dimensions.get("screen").height - Constants.statusBarHeight * 4;

const styles = StyleSheet.create({
    expoContainer: {
        flex: 1,
        backgroundColor: "white",
        height: SCREEN_HEIGHT
    },
    overBox: {
        flex: 1,
        opacity: .85
    },
    expoBtn: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "white",
        height: 45,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 70,
        width: "70%"
    },
    btnText: {
        fontSize: 17,
        color: "white",
        fontWeight: "800",
        textTransform: "uppercase"
    }
})
export interface Props {
    backGroundImage?: string;
    firstText?: Node;
    secondText?: Node;
    firstBtn?: string;
    secondBtn?: string;
    onPressFirstBtn? : () => void;
    onPressSecondBtn? : () => void;
    // onPress?: () => void;
}
const ExpositorCard = (props: Props) => {
    function renderFirstText(){
        const childrenText = props.firstText;
        if(typeof childrenText === "string")
            return(
                <Text>{childrenText}</Text>
            );
        if (!childrenText) return null;
        return childrenText;
    }
    function renderSecondText(){
        const childrenText = props.secondText;
        if(typeof childrenText === "string")
            return(
                <Text>{childrenText}</Text>
            );
        if (!childrenText) return null;
        return childrenText;
    }
    function renderFirstBtn(){
        const childrenText = props.firstBtn;
        const onPress = props.onPressFirstBtn;
        if(typeof childrenText === "string")
            return(
                <TouchableOpacity style={styles.expoBtn} onPress={onPress}>
                    <Text style={styles.btnText}>{childrenText}</Text>
                </TouchableOpacity>
            );
        if (!childrenText) return null;
    }
    function renderSecondBtn(){
        const childrenText = props.secondBtn;
        const onPress = props.onPressSecondBtn;
        if(typeof childrenText === "string")
            return(
                <TouchableOpacity style={styles.expoBtn} onPress={onPress}>
                    <Text style={styles.btnText}>{childrenText}</Text>
                </TouchableOpacity>
            );
        if (!childrenText) return null;
    }
    return (
        <ImageBackground style={styles.expoContainer} source={require("../../assets/bg_4.png")} resizeMode={"cover"}>
            {/* <View style={styles.overBox}/> */}
            <LinearGradient colors={["#000566","#3649b7"]} style={styles.overBox}>
                {renderFirstText()}
                {renderFirstBtn()}
                {renderSecondText()}
                {renderSecondBtn()}
            </LinearGradient>
        </ImageBackground>
    )
}

export default ExpositorCard


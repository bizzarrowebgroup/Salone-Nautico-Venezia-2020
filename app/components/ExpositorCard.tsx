import React from "react"
import { StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity, ImageSourcePropType } from "react-native"
import { LinearGradient } from "expo-linear-gradient";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    expoContainer: {
        flex: 1,
        backgroundColor: "white",
        height: SCREEN_HEIGHT
    },
    overBox: {
        flex: 1,
        opacity: .80
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

interface Props {
    backGroundImage?: ImageSourcePropType;
    firstText?: React.FC;
    secondText?: React.FC;
    firstBtn?: string;
    secondBtn?: string;
    onPressFirstBtn?: () => void;
    onPressSecondBtn?: () => void;
}

const ExpositorCard: React.FC<Props> = ({
    backGroundImage,
    firstText,
    secondText,
    firstBtn,
    secondBtn,
    onPressFirstBtn,
    onPressSecondBtn
}) => {
    function renderFirstText(){
        const childrenText = firstText;
        if(typeof childrenText === "string")
            return(
                <Text>{childrenText}</Text>
            );
        if (!childrenText) return null;
        return childrenText;
    }
    function renderSecondText(){
        const childrenText = secondText;
        if(typeof childrenText === "string")
            return(
                <Text>{childrenText}</Text>
            );
        if (!childrenText) return null;
        return childrenText;
    }
    function renderFirstBtn(){
        const childrenText = firstBtn;
        const onPress = onPressFirstBtn;
        if(typeof childrenText === "string")
            return(
                <TouchableOpacity style={styles.expoBtn} onPress={onPress}>
                    <Text style={styles.btnText}>{childrenText}</Text>
                </TouchableOpacity>
            );
        if (!childrenText) return null;
    }
    function renderSecondBtn(){
        const childrenText = secondBtn;
        const onPress = onPressSecondBtn;
        if(typeof childrenText === "string")
            return(
                <TouchableOpacity style={styles.expoBtn} onPress={onPress}>
                    <Text style={styles.btnText}>{childrenText}</Text>
                </TouchableOpacity>
            );
        if (!childrenText) return null;
    }
    return (
        <ImageBackground style={styles.expoContainer} source={backGroundImage} resizeMode={"cover"}>
            <LinearGradient colors={["#000566","#3649b7"]} style={styles.overBox}>
                {renderFirstText()}
                {renderFirstBtn()}
                {renderSecondText()}
                {renderSecondBtn()}
            </LinearGradient>
        </ImageBackground>
    )
}
ExpositorCard.defaultProps = {
    backGroundImage: require("../../assets/bg_4.png"),
}
export default ExpositorCard


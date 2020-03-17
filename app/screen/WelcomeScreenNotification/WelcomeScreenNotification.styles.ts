import { StyleSheet } from "react-native";
import { platform } from "../../utils";

export default StyleSheet.create({
    introbox: {
        flex: 1,
        backgroundColor: "#041a4c"
    },
    imageLogo: {
        width: 276,
        height: 173,
        marginTop: platform.height / 4 - 50,
        alignSelf: "center"
    },
    testo1: {
        fontWeight: "bold",
        fontSize: 43,
        color: "white",
        textAlign: "right"
    },
    testo2: {
        fontWeight: "bold",
        fontSize: 35,
        color: "white",
        textAlign: "left"
    },
    contenitoretesti: {
        marginHorizontal: 60,
        marginVertical: 40
    }
});
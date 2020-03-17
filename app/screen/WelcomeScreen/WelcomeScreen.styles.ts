import { StyleSheet } from "react-native";
import { platform } from "../../utils";

export default StyleSheet.create({
    introbox: {
        flex: 1,
        backgroundColor: "#041a4c",
    },
    imageLogo: {
        width: 276,
        height: 173,
        marginTop: platform.marginTop,
        alignSelf: "center",
    },
    testoOrganizzato: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        textAlign: "center",
        marginTop: platform.height / 5,
        marginBottom: 22,
    },
});
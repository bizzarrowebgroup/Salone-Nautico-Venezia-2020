import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Linking } from "expo";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 18
    },
    icon: {
        marginHorizontal: 7.5
    }
})

const socialMedia = [
  {
    iconName: "instagram",
    url: "https://www.instagram.com/salonenauticovenezia"
  },
  {
    iconName: "facebook",
    url: "https://www.facebook.com/SaloneNauticoVenezia2019/"
  },
  {
    iconName: "twitter",
    url: "https://twitter.com/SaloneVenezia"
  },
  {
    iconName: "linkedin",
    url: "https://www.linkedin.com/showcase/salone-nautico-venezia"
  },
];

const SocialMedia: React.FC = () => {
    return (
    <View style={styles.container}>
        {socialMedia.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)} style={styles.icon}>
            <MaterialCommunityIcons
            name={item.iconName}
            size={22}
            color={"black"}
            />
        </TouchableOpacity>
        ))}
    </View>
    );
}
export default SocialMedia
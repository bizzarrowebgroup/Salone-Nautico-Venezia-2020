
import React, { useEffect } from "react";
import { View, ScrollView, Text, StatusBar } from "react-native";
import { Header, VideoHomePage, ExpositorCard, News } from "../../components/index";

import styles from "./DashBoardScreen.styles";
import { t } from "../../utils";

const FirstText = () => {
    return (
        <View style={styles.firstBox}>
            <Text style={[styles.text1, styles.whiteText]}>
                <Text style={styles.text4}>{t("FIRSTKEYdash")}</Text>
                <Text style={[styles.text2, styles.text4]}>{t("SECONDKEYdash")}</Text>
                <Text>{t("THIRDKEYdash")}</Text>
                <Text style={[styles.text3, styles.text2]}>{t("FOURTHKEYdash")}</Text>
            </Text>
        </View>
    )
}

const SecondText = () => {
    return (
        <View style={[styles.firstBox, { marginTop: 140 }]}>
            <Text style={[styles.text1, styles.whiteText]}>
                <Text style={styles.text4}>{t("FIRSTKEYdash")}</Text>
                <Text style={[styles.text2, styles.text4]}>{t("FIFTHKEYdash")}</Text>
                <Text>{t("THIRDKEYdash")}</Text>
                <Text style={[styles.text3, styles.text2]}>{t("FOURTHKEYdash")}</Text>
            </Text>
        </View>
    )
}

export type Props = {
    navigation: any;
};

const DashboardScreen: React.FC<Props> = ({
    navigation
}) => {
    useEffect(() => {
        StatusBar.setBarStyle("dark-content", true)
    }, [])
    const onPressHome = () => {
        navigation.toggleDrawer();
    }
    return (<View style={styles.dashboardBox}>
        <View style={styles.headerBox}><Header onPress={() => onPressHome()} /></View>
        <ScrollView style={styles.dashboardBox}>
            <VideoHomePage
                title={t("SEVENKEYdash")}
                desc={t("HEIGHTKEYdash")}
                imageBg={{ uri: "https://www.salonenautico.venezia.it/wp-content/uploads/2020/03/SNV_20_sito_2048x1280_r1_c1.jpg" }}
            />
            <ExpositorCard
                firstText={<FirstText />}
                secondText={<SecondText />}
                firstBtn={t("SIXKEYdash")}
                secondBtn={t("SIXKEYdash")}
                onPressFirstBtn={() => console.log("Pressed be espositore")}
                onPressSecondBtn={() => console.log("Pressed be sponsor")}
            />
            <News />
        </ScrollView>
    </View>);
}

export default DashboardScreen
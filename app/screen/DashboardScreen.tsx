import React from "react";
import {View, StyleSheet, ScrollView, Text} from "react-native";
import {Header, VideoHomePage,ExpositorCard} from "../components/index";

const styles = StyleSheet.create({
  dashboardBox: {
    flex: 1,
  },
  headerBox: {
    zIndex: 1,
    position:"absolute"
  },
  dashboardCnt: {
    zIndex: -1,
  },
  firstBox: {
    marginTop: 90,
    marginHorizontal: 20
  },
  whiteText: {
    color: "white",
    fontSize: 30
  },
  text1:{
    fontWeight: "300",
    fontStyle: "italic"
  },
  text2:{
    fontWeight: "bold",
    fontStyle: "italic"
  },
  text3:{
    fontWeight: "bold"
  },
});

const FirstText = () => {
  return (
    <View style={styles.firstBox}>
      <Text style={[styles.text1,styles.whiteText]}>{"Diventare "}
        <Text style={[styles.text2,styles.whiteText]}>{"espositore\n"}</Text>
        <Text style={[styles.text1,styles.whiteText]}>{"del Salone Nautico\n"}</Text>
        <Text style={[styles.text3,styles.whiteText]}>{"Venezia 2020"}</Text>
      </Text>
    </View>
  )
}

const SecondText = () => {
  return (
    <View style={[styles.firstBox,{marginTop:50}]}>
      <Text style={[styles.text1,styles.whiteText]}>{"Diventare "}
        <Text style={[styles.text2,styles.whiteText]}>{"sponsor\n"}</Text>
        <Text style={[styles.text1,styles.whiteText]}>{"del Salone Nautico\n"}</Text>
        <Text style={[styles.text3,styles.whiteText]}>{"Venezia 2020"}</Text>
      </Text>
    </View>
  )
}

export function DashboardScreen() {
  return (<View style={styles.dashboardBox}>
    <View style={styles.headerBox}><Header/></View>
    <ScrollView style={styles.dashboardBox}>
      <VideoHomePage/>
      <ExpositorCard firstText={<FirstText/>} secondText={<SecondText/>} firstBtn={"Maggiori informazioni"} secondBtn={"Maggiori informazioni"}/>
    </ScrollView>
  </View>);
}

export default DashboardScreen;

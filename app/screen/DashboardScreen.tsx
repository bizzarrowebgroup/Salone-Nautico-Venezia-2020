import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
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
  }
});

export function DashboardScreen() {
  return (<View style={styles.dashboardBox}>
    <View style={styles.headerBox}><Header/></View>
    <ScrollView style={styles.dashboardBox}>
      <VideoHomePage/>
      <ExpositorCard/>
    </ScrollView>
  </View>);
}

export default DashboardScreen;

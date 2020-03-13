import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {Header, VideoHomePage} from "../components/index";

const styles = StyleSheet.create({
  dashboardBox: {
    flex: 1,
  }
});

export function DashboardScreen() {
  return (<View style={styles.dashboardBox}>
    <Header/>
    <ScrollView style={{ zIndex: -1, top: -30 }}>
      <VideoHomePage/>
    </ScrollView>
  </View>);
}

export default DashboardScreen;

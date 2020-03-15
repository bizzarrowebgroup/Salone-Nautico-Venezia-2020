import React, {useEffect} from "react";
import {View, StyleSheet, ScrollView, Text,StatusBar} from "react-native";
import {Header, VideoHomePage, ExpositorCard, News} from "../components/index";

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
  },
  text2:{
    fontWeight: "bold",
  },
  text3:{
    fontStyle: "normal"
  },
  text4:{
    fontStyle: "italic"
  }
});

const FirstText = () => {
  return (
    <View style={styles.firstBox}>
      <Text style={[styles.text1,styles.whiteText]}>
        <Text style={styles.text4}>{"Diventare "}</Text>
        <Text style={[styles.text2,styles.text4]}>{"espositore\n"}</Text>
        <Text>{"del Salone Nautico\n"}</Text>
        <Text style={[styles.text3,styles.text2]}>{"Venezia 2020"}</Text>
      </Text>
    </View>
  )
}

const SecondText = () => {
  return (
    <View style={[styles.firstBox,{marginTop:140}]}>
      <Text style={[styles.text1,styles.whiteText]}>
        <Text style={styles.text4}>{"Diventare "}</Text>
        <Text style={[styles.text2,styles.text4]}>{"sponsor\n"}</Text>
        <Text>{"del Salone Nautico\n"}</Text>
        <Text style={[styles.text3,styles.text2]}>{"Venezia 2020"}</Text>
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
    StatusBar.setBarStyle("dark-content",true)
  }, [])
  const onPressHome = () => {
    navigation.toggleDrawer();
  }
  return (<View style={styles.dashboardBox}>
    <View style={styles.headerBox}><Header onPress={()=>onPressHome()}/></View>
    <ScrollView style={styles.dashboardBox}>
      <VideoHomePage imageBg={{uri:"https://www.salonenautico.venezia.it/wp-content/uploads/2020/03/SNV_20_sito_2048x1280_r1_c1.jpg"}}/>
      <ExpositorCard 
        firstText={<FirstText/>} 
        secondText={<SecondText/>} 
        firstBtn={"Maggiori informazioni"} 
        secondBtn={"Maggiori informazioni"}
        onPressFirstBtn={()=>console.log("Pressed be espositore")}
        onPressSecondBtn={()=>console.log("Pressed be sponsor")}
      />
      <News />
    </ScrollView>
  </View>);
}

export default DashboardScreen

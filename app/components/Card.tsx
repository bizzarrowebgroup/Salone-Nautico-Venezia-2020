import * as React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  imageLogo: {
    width: 99,
    height: 146
  },
  imageLogo2: {
    width: 99,
    height: 38
  },
  textNotification: {
    fontSize: 32,
    fontWeight: "400",
    letterSpacing: 1,
    marginVertical: 30,
    marginLeft: 30,
    marginRight: 55
  },
  textNotificationSmile: {
    fontSize: 80,
    marginTop: 66
  },
  buttonNotification: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "300"
  }
});

export interface Props {
  isIntro: boolean;
  doSmile?: boolean;
  cardText?: string;
  cardButton?: string;
  onPress?: () => void;
}

const Card: React.FC<Props> = ({
  isIntro, 
  cardText, 
  cardButton, 
  onPress, 
  doSmile
}) => {
  if (isIntro) {
    return (<TouchableOpacity onPress={onPress} style={[
        styles.container, {
          flexDirection: "row",
          padding: 10,
          width: 321,
          height: 206
        }
      ]}>
      <Image source={require("../../assets/logovenezia.png")} style={styles.imageLogo}/>
      <Image source={require("../../assets/logovela.png")} style={styles.imageLogo2}/>
    </TouchableOpacity>);
  }
  return (<View style={[
        styles.container, {
          flexDirection: "column",
          minHeight: 281,
          marginVertical: 20,
          marginHorizontal: 30,
        },
        doSmile ? {} : {
          minWidth: 350
        }
      ]}>
      <Text style={doSmile ? styles.textNotification : styles.textNotificationSmile}>{cardText}</Text>
      {
        cardButton
          ? (<TouchableOpacity onPress={onPress} style={styles.buttonNotification}>
            <Text style={styles.buttonText}>{cardButton}</Text>
          </TouchableOpacity>)
          : (<></>)
      }
    </View>);
}

export default Card;
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
  cardText?: string;
  cardButton?: string;
  onPress?: () => void;
}

export default class Card extends React.Component<Props> {
  render() {
    const {isIntro, cardText, cardButton, onPress} = this.props;
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
    } else {
      return (<View style={[
          styles.container, {
            flexDirection: "column",
            minHeight: 281,
            marginVertical: 20,
            marginHorizontal: 30
          }
        ]}>
        <Text style={styles.textNotification}>{cardText}</Text>
        {
          cardButton
            ? (<TouchableOpacity onPress={onPress} style={styles.buttonNotification}>
              <Text style={styles.buttonText}>{cardButton}</Text>
            </TouchableOpacity>)
            : (<></>)
        }
      </View>);
    }
  }
}
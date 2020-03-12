import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Cards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logovenezia.png')} style={styles.imageLogo} />
        <Image source={require('../../assets/logovela.png')} style={styles.imageLogo2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 321,
    height: 206,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    alignSelf: 'center'
  },
  imageLogo: {
    width: 99,
    height: 146
  },
  imageLogo2:{
    width: 99,
    height: 38
  }
});

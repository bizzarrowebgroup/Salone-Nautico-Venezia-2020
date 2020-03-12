import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center'
  },
  textSkip: {
    fontWeight: '400',
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  }
});

export default class ButtonSkip extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textSkip}>{"Skip"}</Text>
      </View>
    );
  }
}
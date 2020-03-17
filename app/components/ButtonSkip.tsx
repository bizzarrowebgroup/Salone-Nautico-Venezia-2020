import * as React from "react";
import {Text, TouchableWithoutFeedback, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    marginVertical: 5
  },
  textSkip: {
    fontWeight: "400",
    fontSize: 18,
    color: "white",
    textAlign: "center"
  }
});

interface Props {
  buttonText?: string;
  onPress?: () => void;
}

const defaultProps: Props = {
  buttonText: "Skip"
};

const ButtonSkip: React.FC<Props> = props => {
  const {buttonText, onPress} = props;
  return (<TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.textSkip}>{buttonText}</Text>
    </View>
  </TouchableWithoutFeedback>);
};

ButtonSkip.defaultProps = defaultProps;

export default ButtonSkip;

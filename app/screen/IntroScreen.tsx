import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, StatusBar } from 'react-native'

const styles = StyleSheet.create({
  introbox: {
    flex: 1,
    backgroundColor: '#041a4c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageLogo: {
    width: 276,
    height: 173
  },
})

export class IntroScreen extends PureComponent {
  componentDidMount(){
    StatusBar.setBarStyle('light-content',true)
    setTimeout(()=>{
      this.props.navigation.navigate('Welcome')
    },3000)
  }
  render(){
    return (
      <View style={styles.introbox}>
        <Image source={require('../../assets/logo.png')} style={styles.imageLogo} />
      </View>
    )
  }
}

export default IntroScreen

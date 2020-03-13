import React, { PureComponent } from "react"
import { Text, View, StyleSheet, StatusBar } from "react-native"
import Constants from "expo-constants"

const styles = StyleSheet.create({
    dashboardBox: {
        paddingTop: Constants.statusBarHeight,
    },
})

export class DashboardScreen extends PureComponent {
    componentDidMount() {
        StatusBar.setBarStyle('dark-content',true)
    }
    render() {
        return (
            <View style={styles.dashboardBox}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default DashboardScreen

import * as React from 'react';

// import AssetExample from './components/AssetExample';
import { IntroScreen } from './screen/IntroScreen';
import { WelcomeScreen } from './screen/WelcomeScreen';
import { WelcomeScreenIntro } from './screen/WelcomeScreenIntro';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <WelcomeScreenIntro />
//       </View>
//     );
//   }
// }
const Drawer = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" headerMode={"none"}>
        <Drawer.Screen name="Home" component={IntroScreen} />
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Welcome1" component={WelcomeScreenIntro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
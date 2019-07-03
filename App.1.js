import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {
  createStackNavigator,
  withNavigationFocus,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import Placeholder from './placeholder';

import PackMonitoring from './packmonitoring';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  state = {
    counter: 0,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Screen1"
          onPress={() => {
            // var p = new Proxy(target, handler);
            // const symbol1 = Symbol();
            this.props.navigation.navigate('ScreenOne', { key: null });
          }}
        />

        <Button
          title="Go to PackMonitoring"
          onPress={() => this.props.navigation.reset('PackMonitoring')}
        />

        <View>
          <Text>Countre: {this.state.counter}</Text>
        </View>

        <Button
          title="SetState1"
          onPress={() => {
            const { counter } = this.state;
            this.setState({
              counter: counter + 1,
            });
          }}
        />
      </View>
    );
  }
}

// const navigatorStack = createSwitchNavigator(
//   {
//     HomeCart: { screen: withNavigationFocus(HomeScreen) },
//     ScreenOne: { screen: withNavigationFocus(ScreenOne) },
//     ScreenTwo: { screen: withNavigationFocus(ScreenTwo) },
//     PackMonitoring: {
//       screen: PackMonitoring,
//       navigationOptions: {
//         header: null
//       }
//     }
//   },
//   {
//     initialRouteName: "HomeCart"
//   }
// );
const navigatorStack = createStackNavigator(
  {
    HomeCart: withNavigationFocus(HomeScreen),
    ScreenOne: withNavigationFocus(ScreenOne),
    ScreenTwo: withNavigationFocus(ScreenTwo),
    PackMonitoring: {
      screen: PackMonitoring,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HomeCart',
  },
);

const App = createAppContainer(navigatorStack);
// export default HomeScreen;
export default App;

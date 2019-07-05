import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {
  createStackNavigator,
  withNavigationFocus,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import ScreenOne from './ScreenOne';
import Waveforms from './Waveforms';
import MemoryHungryArray from './MemHungryArray';
import CrashTest from './CrashTest';

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
          title="Crash Test"
          onPress={() => {
            this.props.navigation.navigate('CrashTest', { key: null });
          }}
        />
        <Button
          title="Go to Flat List"
          onPress={() => {
            this.props.navigation.navigate('ScreenOne', { key: null });
          }}
        />
        <Button
          title="Go to Memory hungry Array"
          onPress={() => {
            this.props.navigation.navigate('MemoryHungryArray', { key: null });
          }}
        />
        <Button
          title="Go to Recording"
          onPress={() => {
            this.props.navigation.navigate('Waveforms', { key: null });
          }}
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

const navigatorStack = createStackNavigator(
  {
    HomeCart: withNavigationFocus(HomeScreen),
    ScreenOne: withNavigationFocus(ScreenOne),
    Waveforms: withNavigationFocus(Waveforms),
    MemoryHungryArray: withNavigationFocus(MemoryHungryArray),
    CrashTest: withNavigationFocus(CrashTest),
  },
  {
    initialRouteName: 'HomeCart',
  },
);

const App = createAppContainer(navigatorStack);
export default App;

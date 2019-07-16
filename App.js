import React, { Component } from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';
import {
  createStackNavigator,
  withNavigationFocus,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import ScreenOne from './ScreenOne';
import Waveforms from './Waveforms';
import MemoryHungryArray from './MemHungryArray';

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
        {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
        <Text>Home Screen</Text>
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
  },
  {
    initialRouteName: 'HomeCart',
  },
);
const styles = StyleSheet.create({
 
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: "#000000",
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const App = createAppContainer(navigatorStack);
export default App;

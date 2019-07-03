import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

const { height } = Dimensions.get('window');

export default class Waveforms extends Component {
  state = {
    waveforms: [],
  };

  componentDidMount() {
    this.generateWaveforms();
  }

  // creates new waveforms
  // a waveform is just represented by a number which will be used to display the height of the view
  generateWaveforms() {
    setInterval(() => {
      const waveformHeight = 200 * Math.random();
      const newWaveForms = this.state.waveforms;
      if (newWaveForms.length < 150) {
        // keep adding waveforms until reaching capacity which is 150
        newWaveForms.unshift(waveformHeight);
      } else {
        // remove the last waveform and insert new one
        newWaveForms.pop();
        newWaveForms.unshift(waveformHeight);
      }
      console.log(newWaveForms.length);
      this.setState({ waveforms: newWaveForms });
    }, 100);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.waveforms.map((waveform, i) => (
          <View
            key={`${waveform}`}
            style={{
              position: 'absolute',
              top: height / 2 - waveform / 2,
              left: i * 3,
              backgroundColor: 'red',
              width: 3,
              height: waveform,
            }}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});



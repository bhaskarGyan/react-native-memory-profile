import React, { Component } from 'react';
import { Text, Alert } from 'react-native';

class CrashTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Alert.alert(
      'Crash Test',
      'Generally crash in 4-5 attempts',
      [
        {
          text: 'Try again',
          onPress: () => {
            this.props.navigation.navigate('HomeCart', { key: null });
          },
        },
      ],
      { cancelable: true },
    );
  }
  render() {
    return <Text>Please go back to home and try again</Text>;
  }
}

export default CrashTest;

import React, { Component } from 'react';
import { View, Button } from 'react-native';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

class AppWithNoNavigation extends Component {
  state = {
    showRecords: false,
    showScreen2: false
  };

  render() {
    if (this.state.showRecords) {
      return <ScreenOne onHide={() => this.setState({ showRecords: false })} />;
    }

    if (this.state.showScreen2) {
      return <ScreenTwo onHide={() => this.setState({ showScreen2: false })} />;
    }

    return (
      <View>
        <Button
          title="Show Records"
          onPress={() => this.setState({ showRecords: true })}
        />
        <Button
          title="Show Screen2"
          onPress={() => this.setState({ showScreen2: true })}
        />
      </View>
    );
  }
}

export default AppWithNoNavigation;

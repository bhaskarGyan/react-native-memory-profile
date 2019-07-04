import React, { Component } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
var i = 0;
class MemoryHungryArray extends Component {
  static navigationOptions = {
    title: 'Screen 2',
  };

  constructor(props) {
    super(props);
    this.records = [];
    this.state = {
      record: ['asdasd'],
    };
  }

  addRecord() {
    var { record } = this.state;
    i++;
    record.push(new Array(999999).join('--' + i));
    this.setState({ record });
  }

  render() {
    const { record } = this.state;
    const last = record[record.length - 1];

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Record length : {JSON.stringify(this.state.record.length)}</Text>
        <Button title="Add Record" onPress={() => this.addRecord()} />

        <Button title="Remove" onPress={() => this.setState({ record: [] })} />
      </View>
    );
  }
}

export default MemoryHungryArray;

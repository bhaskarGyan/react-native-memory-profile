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
    var abc;
    debugger;
    abc = last[last.length - 1];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{JSON.stringify(this.state.record.length)}</Text>
        <Button title="Add Record Dude" onPress={() => this.addRecord()} />
        <Button
          title="Go back to Screen 1"
          onPress={() =>
            this.props.navigation.navigate('ScreenOne', { key: null })
          }
        />
        <Button title="Remove" onPress={() => this.setState({ record: [] })} />
        <Button
          title="Pop to top"
          onPress={() => this.props.navigation.navigate('HomeCart')}
        />
        <ScrollView>
          <View>
            <Text>{abc}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MemoryHungryArray;

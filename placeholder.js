import React from "react";
import { Text, View, Button, TextInput } from "react-native";

class Placeholder extends React.Component {
  state = {
    records: [],
    records2: [],
    records3: [],
    records4: [],
    records5: [],
    records6: [],
    records7: [],
    records8: [],
    records9: []
  };

  render() {
    return (
      <View>
        <Text>Record count: {this.state.records.length}</Text>
        <Button
          title="Add Record"
          onPress={() => {
            this.setState(prevState => ({
              records: [...prevState.records, new Array(99999).join("--")],
              records2: [...prevState.records2, new Array(99999).join("--")],
              records3: [...prevState.records3, new Array(99999).join("--")],
              records4: [...prevState.records4, new Array(99999).join("--")],
              records5: [...prevState.records5, new Array(99999).join("--")],
              records6: [...prevState.records6, new Array(99999).join("--")],
              records7: [...prevState.records7, new Array(99999).join("--")],
              records8: [...prevState.records8, new Array(99999).join("--")],
              records9: [...prevState.records9, new Array(99999).join("--")]
            }));
          }}
        />
        <Button
          title="Delete Record"
          onPress={() => {
            this.setState({
              records: [],
              records2: [],
              records3: [],
              records4: [],
              records5: [],
              records6: [],
              records7: [],
              records8: [],
              records9: []
            });
          }}
        />
      </View>
    );
  }
}

export default Placeholder;

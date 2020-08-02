import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component {
  Show = () => {
    this.props.navigation.navigate('Features');
  };

  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 30}}>HOME</Text>
        <Button title="Features" onPress={this.Show}></Button>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Features extends Component {
  Show = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 30}}>FEATURES</Text>
        <Button title="Home" onPress={this.Show}></Button>
      </View>
    );
  }
}

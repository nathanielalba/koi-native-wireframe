import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from './common/Button';

export default class SplashPage extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    this.props.navigator.push({
      name: 'locationPage'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>welcome to</Text>
          <Text style={styles.headerTextStyles}>KOI</Text>
          <Text>restaurant</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onButtonPress={this.onButtonPress}>
            <Text style={styles.buttonTextStyles}>FIND A TABLE</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyles: {
    fontSize: 50,
    color: '#cb3f28',
    fontWeight: '300',
    padding: 4
  },
  buttonTextStyles: {
    fontSize: 20,
    fontWeight: '200'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

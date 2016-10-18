import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SplashPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTextStyles}>Hello</Text>
        <Text>This is the splashpage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyles: {
    fontSize: 24,
    fontWeight: '300'
  }
});

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import NavigateTo from './common/NavigateTo';

class RestaurantPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainerStyles}>
          <View style={styles.headerBorderStyles}>
            <Text style={styles.headerTextStyles}>{this.props.location.location}</Text>
          </View>
        </View>
        <View style={styles.mainContentContainer}>
          <Text style={styles.mainContentText}>ABOUT</Text>
          <Text style={styles.mainContentText}>LOCATIONS</Text>
          <Text style={styles.mainContentText}>MENUS</Text>
          <Text style={styles.mainContentText}>GALLERIES</Text>
          <Text style={styles.mainContentText}>PRESS</Text>
          <Text style={styles.mainContentText}>CONTACT</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBorderStyles}>
            <NavigateTo navigator={this.props.navigator} location={'splashPage'}>
              <Text style={styles.buttonTextStyles}>FIND A TABLE</Text>
            </NavigateTo>
          </View>
        </View>
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
  headerContainerStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContentContainer: {
    flex: 3
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBorderStyles: {
    borderWidth: 1,
    borderColor: '#000'
  },
  buttonTextStyles: {
    padding: 8,
    fontSize: 18,
    fontWeight: '200'
  },
  mainContentText: {
    height: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5
  },
  headerBorderStyles: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#000'
  },
  headerTextStyles: {
    fontSize: 36,
    color: '#cb3f28',
    fontWeight: '200'
  }
});

const mapStateToProps = (state) => {
  return {
    location: state.location
  };
};

export default connect(mapStateToProps)(RestaurantPage);

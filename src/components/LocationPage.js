import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Button from './common/Button';

class LocationPage extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
    this.getFormattedAddress = this.getFormattedAddress.bind(this);
  }

  componentDidMount() {
    this.props.getCoords();
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      this.props.setCoords(coords.latitude, coords.longitude);
      this.getFormattedAddress();
    });
  }

  onButtonPress() {
    this.props.navigator.push({
      name: 'locationsPage'
    });
  }

  getFormattedAddress() {
    const { latitude, longitude } = this.props.location;

    this.props.getAddresses(latitude, longitude);
  }

  render() {
    if (this.props.location.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            animating={this.props.location.loading}
            style={{ height: 80 }}
            size={'large'}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer, styles.centeringStyles]}>
          <Text>It looks like our closest location to you is</Text>
        </View>
        <View style={[styles.bodyContainer, styles.centeringStyles]}>
          <Text style={styles.mainContent}>{this.props.location.location}</Text>
        </View>
        <View style={[styles.footerContainer, styles.centeringStyles]}>
          <Button onButtonPress={this.onButtonPress}>
            <Text>Check out our other locations</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    fontSize: 40,
    fontWeight: '200'
  },
  centeringStyles: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerContainer: {
    flex: 1
  },
  bodyContainer: {
    flex: 2
  },
  headerContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    location: state.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoords: () => {
      dispatch(actions.getLatAndLong());
    },
    setCoords: (latitude, longitude) => {
      dispatch(actions.setLatAndLong({ latitude, longitude }));
    },
    getAddresses: (latitude, longitude) => {
      dispatch(actions.fetchLocation(latitude, longitude));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);

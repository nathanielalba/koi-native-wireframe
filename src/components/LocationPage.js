import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import NavigateTo from './common/NavigateTo';


class LocationPage extends Component {
  constructor(props) {
    super(props);

    this.getFormattedAddress = this.getFormattedAddress.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    this.props.getCoords();
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      this.props.setCoords(coords.latitude, coords.longitude);
      this.getFormattedAddress();
    });
  }

  getFormattedAddress() {
    const { latitude, longitude } = this.props.location;

    this.props.getAddresses(latitude, longitude);
  }

  navigate(route) {
    this.props.navigator.push({
      name: route
    });
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
        <View style={{ flex: 0.5 }} />
        <View style={[styles.headerContainer, styles.centeringStyles]}>
          <Text>It looks like our closest location to you is</Text>
        </View>
        <View style={[styles.bodyContainer, styles.centeringStyles]}>
          <View style={styles.borderBottomMain}>
            <Text style={[styles.mainContent, { marginBottom: 2 }]}>{this.props.location.location}</Text>
          </View>
        </View>
        <View style={[styles.footerContainer, styles.centeringStyles]}>
          <View style={styles.buttonBorderStyles}>
            <NavigateTo
              location={'restaurantDetails'}
              navigator={this.props.navigator}
            >
              <Text style={[styles.buttonTextStyles, { padding: 8 }]}>PROCEED WITH LOCATION</Text>
            </NavigateTo>
          </View>
            <NavigateTo
              location={'locationsPage'}
              navigator={this.props.navigator}
            >
              <Text style={{ fontSize: 12 }}>Check out our other locations</Text>
            </NavigateTo>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderBottomMain: {
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  buttonTextStyles: {
    fontSize: 20,
    fontWeight: '200',
  },
  buttonBorderStyles: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 15
  },
  mainContent: {
    fontSize: 40,
    fontWeight: '200',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  centeringStyles: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerContainer: {
    flex: 1.5
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

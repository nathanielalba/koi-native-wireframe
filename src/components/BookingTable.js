import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';


import { bookNewTable } from '../lib/bookingTableAPI';
// import restaurantLocations from '../lib/restaurantLocations';

class BookingTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: this.props.location.location || 'Koi Las Vegas',
      date: null,
      time: null,
      partySize: null
    };

    this.bookTable = this.bookTable.bind(this);
  }

  bookTable() {
    bookNewTable(this.state, (results) => {
      console.log(results);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyles}
            source={{ uri: 'https://s18.postimg.org/xd4aaf2x5/KOI_logo_fullpage.jpg' }}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingProp}>
            Location
          </Text>
          <TextInput
            style={styles.textInputStyles}
            value={this.state.location}
            onChangeText={(location) => this.setState({ location })}
          />
        </View>
        <View style={styles.setting}>
            <Text style={styles.settingProp}>
              Date
            </Text>
            <TextInput
              style={styles.textInputStyles}
              onChangeText={(date) => this.setState({ date })}
            />
        </View>
        <View style={styles.setting}>
            <Text style={styles.settingProp}>
              Time
            </Text>
            <TextInput
              style={styles.textInputStyles}
              onChangeText={(time) => this.setState({ time })}
            />
        </View>
        <View style={styles.setting}>
            <Text style={styles.settingProp}>
              Party Size
            </Text>
            <TextInput
              style={styles.textInputStyles}
              onChangeText={(partySize) => this.setState({ partySize })}
            />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.bookTable}>
            <Text style={styles.buttonTextStyles}>FIND A TABLE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyles: {
    flex: 1,
    fontWeight: '200'
  },
  imageStyles: {
    width: 120,
    height: 140
  },
  imageContainer: {
    flex: 0.75,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTextStyles: {
    fontSize: 22,
    padding: 8,
    fontWeight: '200',
  },
  buttonStyles: {
    borderColor: '#000',
    borderWidth: 1
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  setting: {
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
  },
  settingProp: {
    color: '#888',
    marginRight: 10,
    width: 70,
  },
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white',
  },
});

const mapStateToProps = (state) => {
  return {
    location: state.location
  };
};

export default connect(mapStateToProps)(BookingTable);

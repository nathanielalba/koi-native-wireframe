import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';

class BookingTable extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={styles.inputLabelStyles}>
          <Text style={styles.textInputLabelStyles}>location:</Text>
        </View>
        <View style={styles.formSection}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => console.log(text)}
            value={this.props.location.location}
          />
        </View>
        <View style={styles.inputLabelStyles}>
          <Text style={styles.textInputLabelStyles}>date:</Text>
        </View>
        <View style={styles.formSection}>
          <TextInput
            style={styles.textInput}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.inputLabelStyles}>
          <Text style={styles.textInputLabelStyles}>time:</Text>
        </View>
        <View style={styles.formSection}>
          <TextInput
            style={styles.textInput}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.inputLabelStyles}>
          <Text style={styles.textInputLabelStyles}>party size:</Text>
        </View>
        <View style={styles.formSection}>
          <TextInput
            style={styles.textInput}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.buttonStyles}>
            <Text style={styles.buttonTextStyles}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputLabelStyles: {
    fontSize: 15,
    fontWeight: '200',
    padding: 8,
    color: '#cb3f28'
  },
  inputLabelStyles: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    alignSelf: 'flex-start'
  },
  textInput: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 0.5,
    height: 40,
    backgroundColor: '#fafafa',
    padding: 10,
    margin: 5
  },
  buttonTextStyles: {
    fontSize: 17,
    fontWeight: '200'
  },
  buttonStyles: {
    height: 50,
    width: 80,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSection: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formSection: {
    flex: 1,
    flexDirection: 'row'
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

export default connect(mapStateToProps)(BookingTable);

import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onButtonPress}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

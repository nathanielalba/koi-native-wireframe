import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

export default class NavigateTo extends Component {
  constructor(props) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo() {
    this.props.navigator.push({
      name: this.props.location
    });
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.styles ? this.props.styles : {}}
        onPress={this.navigateTo}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

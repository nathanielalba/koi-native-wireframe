import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import RestaurantListDetail from './RestaurantListDetail';
import restaurantLocations from '../lib/restaurantLocations';

export default class Locations extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    return restaurantLocations.map(location => {
      return (<RestaurantListDetail location={location} key={location.city} />);
    });
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 20 }}>
        {this.renderList()}
      </ScrollView>
    );
  }
}

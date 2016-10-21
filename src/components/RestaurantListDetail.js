import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';

import Card from './common/Card';
import CardSection from './common/CardSection';
import * as actions from '../actions';

class RestaurantDetail extends Component {

  renderDescription() {
    const { expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text>select this location</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { name, address, id } = this.props.restaurant;
    return (
      <TouchableWithoutFeedback onPress={() => console.log(id)}>
        <Card>
          <CardSection>
            <View style={[styles.centeringStyles, styles.imageContainer]}>
              <Image
                style={styles.imageStyles}
                source={{ uri: 'https://s18.postimg.org/xd4aaf2x5/KOI_logo_fullpage.jpg' }}
              />
            </View>
            <View style={[styles.centeringStyles, styles.textContainer]}>
              <Text style={{ fontSize: 18 }}>{ name }</Text>
              <Text style={{ fontSize: 10 }}>{ address }</Text>
            </View>
          </CardSection>
          {this.renderDescription()}
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  imageStyles: {
    width: 70,
    height: 90,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  textContainer: {
    flex: 3,
    height: 80
  },
  centeringStyles: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedRestaurantId === ownProps.restaurant.id;

  return { expanded };
  console.log(ownProps);
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectRestaurant: (id) => {
      dispatch(actions.selectRestaurant(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);

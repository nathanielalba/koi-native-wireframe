import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';

const RestaurantDetail = ({ location }) => {
  const { name, address } = location;
  return (
    <Card>
      <CardSection>
        <View style={[styles.centeringStyles, styles.imageContainer]}>
          <Text>IMAGE</Text>
        </View>
        <View style={[styles.centeringStyles, styles.textContainer]}>
          <Text style={{ fontSize: 18}}>{ name }</Text>
          <Text style={{ fontSize: 10 }}>{ address }</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  textContainer: {
    flex: 3,
    height: 60
  },
  centeringStyles: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default RestaurantDetail;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';

const RestaurantDetail = ({ location }) => {
  const { name, address } = location;
  return (
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
    </Card>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    width: 70,
    height: 70,
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

export default RestaurantDetail;

import axios from 'axios';

import restaurants from './restaurantLocations';

const API_KEY = 'AIzaSyD8tgCuU9YrcILFWC3dAmWi7Ze-MnMhaFs';

export const googleAPI = (latitude, longitude, callback) => {
  const API_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

  axios.get(API_URL)
    .then((response) => {
      if (callback) { callback(response); }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const findNearestLocation = (address) => {
   for (let i = 0; i < restaurants.length; i++) {
     if (address.includes(restaurants[i].city)) {
       return restaurants[i];
     }
   }
   return null;
};

export const distanceMatrixAPI = (address, latitude, longitude, callback) => {
  const closestRestaurantAddress = findNearestLocation(address);
  if (closestRestaurantAddress) {
    const API_PARAMS = `&origins=${address}|${latitude},${longitude}&destinations=${closestRestaurantAddress.address}`;
    const API_URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&key=${API_KEY}${API_PARAMS}`;
    const FORMATTED_API_URL = API_URL.replace(/ /g, '+');
    axios.get(FORMATTED_API_URL)
      .then((response) => {
        if (callback) { callback(response); }
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    callback(null);
  }
};

import axios from 'axios';

const API_KEY = 'AIzaSyD8tgCuU9YrcILFWC3dAmWi7Ze-MnMhaFs';

export default (latitude, longitude, callback) => {
  const API_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

  axios.get(API_URL)
    .then((response) => {
      if (callback) { callback(response); }
    })
    .catch((err) => {
      console.error(err);
    });
};

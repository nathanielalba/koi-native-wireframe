import { googleAPI, distanceMatrixAPI, findNearestLocation } from '../lib/googleGeolocationAPI';

export const getLatAndLong = () => {
  return {
    type: 'get_lat_and_long'
  };
};

export const setLatAndLong = (payload) => {
  return {
    type: 'set_lat_and_long',
    payload: {
      latitude: payload.latitude,
      longitude: payload.longitude
    }
  };
};

export const getFormattedAddress = () => {
  return {
    type: 'get_formatted_address'
  };
};

export const setFormattedAddress = (payload) => {
  return {
    type: 'set_formatted_address',
    payload
  };
};

export const getHomeRestaurant = () => {
  return {
    type: 'get_home_restaurant',
    payload: {
      loading: true
    }
  };
};

export const setHomeRestaurant = (payload) => {
  return {
    type: 'set_home_restaurant',
    payload: {
      location: payload.location,
      restAddress: payload.address,
      menu: payload.menu,
      galleries: payload.galleries,
      loading: false,
    }
  };
};

export const getAddresses = () => {
  return {
    type: 'get_addresses',
    payload: {
      loading: true
    }
  };
};

export const setAddresses = (payload) => {
  return {
    type: 'set_addresses',
    payload: {
      address: payload.address,
      location: payload.location,
      restAddress: payload.restAddress,
      menu: payload.menu,
      galleries: payload.galleries
    }
  };
};

export const setHomeAddress = (payload) => {
  return {
    type: 'set_home_address',
    payload
  };
};

export const fetchLocation = (latitude, longitude) => {
  return (dispatch) => {
    dispatch(getAddresses());
    googleAPI(latitude, longitude, (data) => {
      const address = data.data.results[0].formatted_address;
      distanceMatrixAPI(address, latitude, longitude, (distanceData) => {
        const results = distanceData.data.rows.shift().elements.shift();
        if (results.status === 'ZERO_RESULTS') {
          dispatch(setHomeAddress(address));
        } else {
          if (parseInt(results.distance.text, 10) <= 25) {
            const restaurant = findNearestLocation(address);
            const addressBuilder = {
              address,
              location: restaurant.name,
              restAddress: `${restaurant.address} ${restaurant.city}, ${restaurant.city} ${restaurant.zipcode}`,
              menu: restaurant.menu,
              galleries: restaurant.galleries
            };
            // console.log(addressBuilder);
            dispatch(setAddresses(addressBuilder));
          } else {
            dispatch(setHomeAddress(address));
          }
        }
      });
    });
  };
};

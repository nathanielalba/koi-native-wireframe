import googleAPI from '../lib/googleGeolocationAPI';

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

export const fetchLocation = (latitude, longitude) => {
  return (dispatch) => {
    dispatch(getFormattedAddress());
    googleAPI(latitude, longitude, (data) => {
      const address = data.data.results[0].formatted_address;
      dispatch(setFormattedAddress(address));
    });
  };
};

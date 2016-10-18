const defaultLocationState = {
  loading: false,
  longitude: null,
  latitude: null,
  address: ''
};

export default (state = defaultLocationState, action) => {
  switch (action.type) {
    case 'get_lat_and_long':
      return {
        ...state,
        loading: true,
      };
    case 'set_lat_and_long':
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        loading: false
      };
    case 'get_formatted_address':
      return {
        ...state,
        loading: true,
      };
    case 'set_formatted_address':
      return {
        ...state,
        address: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

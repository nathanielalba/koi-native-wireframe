const defaultLocationState = {
  loading: false,
  longitude: null,
  latitude: null,
  address: '',
  location: '',
  restAddress: '',
  menu: [],
  galleries: [],
  locationFound: false
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
    case 'get_addresses':
      return {
        ...state,
        loading: true,
      };
    case 'set_addresses_not_found':
      return {
        ...state,
        loading: false,
        locationFound: false
      };
    case 'set_home_address':
      return {
        ...state,
        address: action.payload,
        loading: false,
        locationFound: false
      };
    case 'set_addresses':
      return {
        ...state,
        address: action.payload.address,
        location: action.payload.location,
        restAddress: action.payload.restAddress,
        menu: [...action.payload.menu],
        galleries: [...action.payload.galleries],
        locationFound: true,
        loading: false
      };
    default:
      return state;
  }
};

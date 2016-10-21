import { combineReducers } from 'redux';

import locationReducer from './locationReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
  location: locationReducer,
  selectedRestaurantId: selectionReducer
});

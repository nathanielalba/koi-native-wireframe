import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export default () => {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  const store = createStoreWithMiddleware(rootReducer);

  store.subscribe(() => {
    console.log(store.getState());
  });

  return store;
};

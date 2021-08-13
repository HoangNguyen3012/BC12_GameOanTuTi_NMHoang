import { createStore, combineReducers } from 'redux';
import OanTuTiReducer from './reducers/OanTuTiReducer';

// Create Reducer manager
const rootReducer = combineReducers({
    OanTuTiReducer,
});

// Create store ( root reducer manager )
const store = createStore(
    rootReducer,
      // Setup redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
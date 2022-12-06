import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import flightReducer from './flight.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  flight: flightReducer,
});

export default rootReducer;

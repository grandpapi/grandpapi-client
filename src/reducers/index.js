import { combineReducers } from 'redux';
import session from './sessionReducer';
import databases from './dbReducer';

export default combineReducers({
  session,
  databases
});

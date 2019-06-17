import { combineReducers } from 'redux';
import session from './sessionReducer';
import databases from './dbReducer';
import models from './modelReducer';

export default combineReducers({
  session,
  databases,
  models
});

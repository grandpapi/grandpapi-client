import { combineReducers } from 'redux';
import session from './sessionReducer';
import databases from './dbReducer';
import models from './modelReducer';
import data from './dataReducer';

export default combineReducers({
  session,
  databases,
  models,
  data
});

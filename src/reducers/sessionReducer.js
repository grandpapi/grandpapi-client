import { SET_SESSION, CHECK_SESSION } from '../actions/sessionActions';
import { CREATE_DB } from '../actions/userDatabases/dbActions';
import { CREATE_MODEL } from '../actions/modelActions';

const initialState = {
  username: '',
  token: '',
  currentDatabase: {
    dbName: '',
    dbId: ''
  },
  currentModel: {
    mdlName: '',
    mdlId: '',
    mdlSchema: '{}'
  },
  currentData: {
    dataId: ''
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION:
    case CHECK_SESSION:
      return {
        ...state,
        ...action.payload
      };
    case CREATE_DB:
      return {
        ...state,
        currentDatabase: {
          dbName: action.payload.dbName,
          dbId: action.payload._id,
        }
      };
    case CREATE_MODEL:
      return {
        ...state,
        currentModel: {
          mdlName: action.payload.mdlName,
          mdlId: action.payload._id,
          mdlSchema: action.payload.mdlSchema
        }
      };
    default:
      return state;
  }
}

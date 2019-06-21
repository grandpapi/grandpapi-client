import { SET_SESSION, CHECK_SESSION } from '../actions/sessionActions';
import { CREATE_DB, UPDATE_DB_STATE } from '../actions/dbActions';
import { CREATE_MODEL, UPDATE_MDL_STATE } from '../actions/modelActions';
import { CREATE_DATA } from '../actions/dataActions';

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
    case CREATE_DATA:
      return {
        ...state,
        currentData: {
          dataId: action.payload._id
        }
      };
    case UPDATE_DB_STATE:
      return {
        ...state,
        currentDatabase: {
          dbName: action.payload.dbName,
          dbId: action.payload.dbId
        },
        currentModel: {
          mdlName: '',
          mdlId: '',
          mdlSchema: '{}'
        }
      };
    case UPDATE_MDL_STATE:
      return {
        ...state,
        currentModel: {
          mdlName: action.payload.mdlName,
          mdlId: action.payload.mdlId,
          mdlSchema: action.payload.mdlSchema
        }
      };
    default:
      return state;
  }
}

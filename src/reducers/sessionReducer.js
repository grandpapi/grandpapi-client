import { SET_SESSION, CHECK_SESSION, NAVIGATE_DASHBOARD, NAVIGATE_DATABASE } from '../actions/sessionActions';
import { CREATE_DB, UPDATE_DB_STATE } from '../actions/dbActions';
import { CREATE_MODEL, UPDATE_MDL_STATE } from '../actions/modelActions';

const initialState = {
  username: '',
  token: '',
  currentDatabase: {
    dbName: '',
    dbId: '',
    username: ''
  },
  currentModel: {
    mdlName: '',
    mdlId: '',
    mdlSchema: '{}'
  },
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
          username: action.payload.username
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
    case UPDATE_DB_STATE:
      return {
        ...state,
        currentDatabase: {
          dbName: action.payload.dbName,
          dbId: action.payload.dbId,
          username: action.payload.username
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
    case NAVIGATE_DASHBOARD:
      return {
        ...state,
        currentDatabase: {
          dbName: '',
          dbId: '',
          username: ''
        },
        currentModel: {
          mdlName: '',
          mdlId: '',
          mdlSchema: '{}'
        }
      };
    case NAVIGATE_DATABASE:
      return {
        ...state,
        currentModel: {
          mdlName: '',
          mdlId: '',
          mdlSchema: '{}'
        }
      };
    default:
      return state;
  }
}

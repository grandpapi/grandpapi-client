import {
  CREATE_DB,
  CREATE_DB_PENDING,
  FETCH_DBS, FETCH_DBS_PENDING,
  CREATE_DB_FULFILLED
} from '../actions/userDatabases/dbActions';


const initialState = {
  loading: false,
  dbName: '',
  dbId: '',
  userDbs: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DB_PENDING:
    case FETCH_DBS_PENDING:
      return { ...state, loading: true };
    case CREATE_DB:
      return { ...state, loading: false, dbName: action.payload.dbName, dbId: action.payload._id };
    case FETCH_DBS:
      return { ...state, loading: false, userDbs: action.payload };
    default:
      return state;
  }
}

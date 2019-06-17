import { CREATE_DB, CREATE_DB_PENDING } from '../actions/userDatabases/dbActions';

const initialState = {
  loading: false,
  dbName: '',
  dbId: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DB_PENDING:
      return { ...state, loading: true };
    case CREATE_DB:
      return { ...state, loading: false, dbName: action.payload.dbName, dbId: action.payload._id };
    default:
      return state;
  }
}

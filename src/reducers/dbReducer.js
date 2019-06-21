import { CREATE_DB_PENDING, FETCH_DBS, FETCH_DBS_PENDING } from '../actions/dbActions';

const initialState = {
  loading: false,
  userDbs: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DB_PENDING:
    case FETCH_DBS_PENDING:
      return { ...state, loading: true };
    case FETCH_DBS:
      return { ...state, loading: false, userDbs: action.payload };
    default:
      return state;
  }
}

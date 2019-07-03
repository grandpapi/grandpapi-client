import { CREATE_DATA_PENDING, CREATE_DATA } from '../actions/dataActions';

const initialState = {
  loading: false,
  current: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DATA_PENDING:
      return { ...state, loading: true };
    case CREATE_DATA:
      return {
        loading: false,
        current: action.payload
      };
    default:
      return state;
  }
}

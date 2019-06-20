import { CREATE_DATA_PENDING } from '../actions/dataActions';

const initialState = {
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DATA_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}

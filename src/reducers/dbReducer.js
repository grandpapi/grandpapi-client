import { POST_NICKNAME, POST_NICKNAME_PENDING } from '../actions/userDatabases/dbActions';

const initialState = {
  loading: false,
  nickname: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST_NICKNAME_PENDING:
      return { ...state, loading: true };
    case POST_NICKNAME:
      return { ...state, loading: false, nickname: action.payload };
    default:
      return state;
  }
}

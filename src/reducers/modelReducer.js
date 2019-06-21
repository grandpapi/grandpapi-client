import {
  CREATE_MODEL_PENDING,
  FETCH_MODELS,
  FETCH_MODELS_PENDING,
  FETCH_ALL_MODELS_PENDING,
  FETCH_ALL_MODELS
} from '../actions/modelActions';

const initialState = {
  loading: false,
  dbMdls: [],
  allMdls: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MODEL_PENDING:
    case FETCH_MODELS_PENDING:
    case FETCH_ALL_MODELS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_MODELS:
      return {
        ...state,
        loading: false,
        dbMdls: action.payload
      };
    case FETCH_ALL_MODELS:
      return {
        ...state,
        loading: false,
        allMdls: action.payload
      };
    default:
      return state;
  }
}

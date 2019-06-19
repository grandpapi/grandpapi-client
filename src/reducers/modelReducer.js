import {
  CREATE_MODEL,
  CREATE_MODEL_PENDING,
  ADD_ENTRY_PENDING,
  ADD_ENTRY,
  FETCH_MODELS,
  FETCH_MODELS_PENDING
} from '../actions/modelActions';

const initialState = {
  loading: false,
  mdlName: '',
  mdlSchema: '{}',
  mdlId: '',
  dbMdls: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MODEL_PENDING:
    case ADD_ENTRY_PENDING:
    case FETCH_MODELS_PENDING:
      return { ...state, loading: true };
    case CREATE_MODEL:
      return { ...state, loading: false, mdlName: action.payload.mdlName, mdlId: action.payload._id };
    case ADD_ENTRY:
      return { ...state, loading: false, mdlSchema: action.payload.mdlSchema };
    case FETCH_MODELS:
      return { ...state, loading: false, dbMdls: action.payload };
    default:
      return state;
  }
}

import {
  CREATE_MODEL,
  CREATE_MODEL_PENDING,
  CREATE_MODEL_FULFILLED,
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
  mdlNameShow: false,
  mdlEntryShow: false,
  addNewMdlShow: false,
  dbMdls: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MODEL_PENDING:
      return { ...state, loading: true };
    case CREATE_MODEL:
      return { ...state, loading: false, mdlName: action.payload.mdlName, mdlId: action.payload._id };
    case CREATE_MODEL_FULFILLED:
      return { ...state, mdlNameShow: false, mdlEntryShow: true };
    case ADD_ENTRY_PENDING:
      return { ...state, loading: true };
    case ADD_ENTRY:
      return { ...state, loading: false, mdlSchema: action.payload.mdlSchema };
    case FETCH_MODELS_PENDING:
      return { ...state, loading: true };
    case FETCH_MODELS:
      return { ...state, loading: false, dbMdls: action.payload };
    default:
      return state;
  }
}

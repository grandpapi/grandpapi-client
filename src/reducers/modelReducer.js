import { CREATE_MODEL, CREATE_MODEL_PENDING, ADD_ENTRY_PENDING, ADD_ENTRY } from '../actions/modelActions';

const initialState = {
  loading: false,
  mdlName: '',
  mdlSchema: '{}',
  mdlId: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MODEL_PENDING:
      return { ...state, loading: true };
    case CREATE_MODEL:
      return { ...state, loading: false, mdlName: action.payload.mdlName, mdlId: action.payload._id };
    case ADD_ENTRY_PENDING:
      return { ...state, loading: true };
    case ADD_ENTRY:
      return { ...state, loading: false, mdlSchema: action.payload.mdlSchema };
    default:
      return state;
  }
}

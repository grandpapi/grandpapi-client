import { CREATE_MODEL, CREATE_MODEL_PENDING } from '../actions/modelActions';

const initialState = {
  loading: false,
  mdlName: '',
  mdlSchema: {},
  modelId: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MODEL_PENDING:
      return { ...state, loading: true };
    case CREATE_MODEL:
      return { ...state, loading: false, mdlName: action.payload.mdlName, modelId: action.payload._id };
    default:
      return state;
  }
}

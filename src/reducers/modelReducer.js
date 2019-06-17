import { CREATE_MODEL, CREATE_MODEL_PENDING } from '../actions/modelActions';

const initialState = {
  loading: false,
  modelName: '',
  schema: {},
  modelId: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MODEL_PENDING:
      return { ...state, loading: true };
    case CREATE_MODEL:
      return { ...state, loading: false, modelName: action.payload.modelName, modelId: action.payload._id };
    default:
      return state;
  }
}

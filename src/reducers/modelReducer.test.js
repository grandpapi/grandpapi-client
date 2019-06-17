import modelReducer from './modelReducer';
import { CREATE_MODEL } from '../actions/modelActions';

jest.mock('../services/megaNapAPI.js', () => ({
  postModel() {
    return Promise.resolve([]);
  },
  patchModel() {
    return Promise.resolve([]);
  }
}));

const initialState = {
  loading: false,
  modelName: '',
  schema: {},
  modelId: ''
};

describe('model reducer tests', () => {
  it('can handle a post to model', () => {
    expect(modelReducer({ ...initialState, loading: true }, {
      type: CREATE_MODEL,
      payload: {
        _id: 'test id',
        modelName: 'test modelName',
        schema: {}
      }
    })).toEqual({
      loading: false,
      modelId: 'test id',
      modelName: 'test modelName',
      schema: {}
    });
  });
});

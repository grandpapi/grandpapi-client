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
  mdlName: '',
  mdlSchema: {},
  mdlId: ''
};

describe('model reducer tests', () => {
  it('can handle a post to model', () => {
    expect(modelReducer({ ...initialState, loading: true }, {
      type: CREATE_MODEL,
      payload: {
        _id: 'test id',
        mdlName: 'test mdlName',
        mdlSchema: {}
      }
    })).toEqual({
      loading: false,
      mdlId: 'test id',
      mdlName: 'test mdlName',
      mdlSchema: {}
    });
  });
});

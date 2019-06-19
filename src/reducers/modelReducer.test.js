import modelReducer from './modelReducer';
import {
  CREATE_MODEL,
  CREATE_MODEL_PENDING,
  ADD_ENTRY_PENDING,
  ADD_ENTRY
} from '../actions/modelActions';

jest.mock('../services/modelMegaNapAPI.js', () => ({
  postModel() {
    return Promise.resolve([]);
  },
  patchModel() {
    return Promise.resolve([]);
  },
  getModels() {
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
  it('can handle a post to model pending', () => {
    expect(modelReducer(initialState, {
      type: CREATE_MODEL_PENDING 
    })).toEqual({
      ...initialState,
      loading: true
    });
  });
  
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
  
  it('can handle an add entry pending', () => {
    expect(modelReducer(initialState, {
      type: ADD_ENTRY_PENDING
    })).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('can handle an add entry action', () => {
    expect(modelReducer({ ...initialState, loading: true }, {
      type: ADD_ENTRY,
      payload: {
        mdlSchema: 'test entry'
      }
    })).toEqual({
      ...initialState,
      loading: false,
      mdlSchema: 'test entry'
    });
  });
});

import modelReducer from './modelReducer';
import {
  CREATE_MODEL_PENDING,
  FETCH_MODELS_PENDING,
  FETCH_MODELS,
  FETCH_ALL_MODELS
} from '../actions/modelActions';

jest.mock('../services/modelMegaNapAPI.js', () => ({
  postModel() {
    return Promise.resolve([]);
  },
  getModels() {
    return Promise.resolve([]);
  },
  getAllModels() {
    return Promise.resolve([]);
  }
}));

const initialState = {
  loading: false,
  dbMdls: [],
  allMdls: []
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
  
  it('can handle a fetch models pending', () => {
    expect(modelReducer(initialState, {
      type: FETCH_MODELS_PENDING
    })).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('can handle a fetch models action', () => {
    expect(modelReducer({ ...initialState, loading: true }, {
      type: FETCH_MODELS,
      payload: ['test model']
    })).toEqual({
      ...initialState,
      loading: false,
      dbMdls: ['test model'],
      allMdls: []
    });
  });
  
  it('can handle a fetch all modelspending', () => {
    expect(modelReducer(initialState, {
      type: FETCH_MODELS_PENDING
    })).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('can handle a fetch all models action', () => {
    expect(modelReducer({ ...initialState, loading: true }, {
      type: FETCH_ALL_MODELS,
      payload: ['test model']
    })).toEqual({
      ...initialState,
      loading: false,
      dbMdls: [],
      allMdls: ['test model']
    });
  });
});

import { createModel, fetchModels, fetchAllModels,  } from './modelActions';

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

describe('model actions', () => {
  it('creates an action to post models', () => {
    const modelAction = createModel();
    expect(modelAction).toEqual({
      type: 'CREATE_MODEL',
      pendingType: 'CREATE_MODEL_PENDING',
      fulfilledType: 'CREATE_MODEL_FULFILLED',
      rejectedType: 'CREATE_MODEL_REJECTED',
      payload: expect.any(Promise)
    });
  });
  
  it('creates an action to fetch models', () => {
    const modelAction = fetchModels();
    expect(modelAction).toEqual({
      type: 'FETCH_MODEL',
      pendingType: 'FETCH_MODEL_PENDING',
      fulfilledType: 'FETCH_MODEL_FULFILLED',
      rejectedType: 'FETCH_MODEL_REJECTED',
      payload: expect.any(Promise)
    });
  });
  
  it('creates an action to fetch all models', () => {
    const modelAction = fetchAllModels();
    expect(modelAction).toEqual({
      type: 'FETCH_ALL_MODELS',
      pendingType: 'FETCH_ALL_MODELS_PENDING',
      fulfilledType: 'FETCH_ALL_MODELS_FULFILLED',
      rejectedType: 'FETCH_ALL_MODELS_REJECTED',
      payload: expect.any(Promise)
    });
  });
});

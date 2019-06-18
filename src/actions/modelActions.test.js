import { createModel, addEntry } from './modelActions';

jest.mock('../services/modelMegaNapAPI.js', () => ({
  postModel() {
    return Promise.resolve([]);
  },
  patchModel() {
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
  
  it('creates an action to patch entries', () => {
    const modelAction = addEntry();
    expect(modelAction).toEqual({
      type: 'ADD_ENTRY',
      pendingType: 'ADD_ENTRY_PENDING',
      fulfilledType: 'ADD_ENTRY_FULFILLED',
      rejectedType: 'ADD_ENTRY_REJECTED',
      payload: expect.any(Promise)
    });
  });
});

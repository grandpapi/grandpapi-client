import { createData } from './dataActions';

jest.mock('../services/dataMegaNapAPI.js', () => ({
  postData() {
    return Promise.resolve([]);
  }
}));

describe('data actions', () => {
  it('creates an action to post to data', () => {
    const dataAction = createData();
    expect(dataAction).toEqual({
      type: 'CREATE_DATA',
      pendingType: 'CREATE_DATA_PENDING',
      fulfilledType: 'CREATE_DATA_FULFILLED',
      rejectedType: 'CREATE_DATA_REJECTED',
      payload: expect.any(Promise)
    });
  });
}); 

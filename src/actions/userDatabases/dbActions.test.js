import { createDb } from "./dbActions";

jest.mock('../../services/grandpAPI.js', () => ({
  postDb() {
    return Promise.resolve([]);
  }
}));

describe('data base actions', () => {
  it('creates an action to post to the database', () => {
    const dbAction = createDb();
    expect(dbAction).toEqual({
      type: 'CREATE_DB',
      pendingType: 'CREATE_DB_PENDING',
      fulfilledType: 'CREATE_DB_FULFILLED',
      rejectedType: 'CREATE_DB_REJECTED',
      payload: expect.any(Promise)
    });
  });
}); 

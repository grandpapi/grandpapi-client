import { createDb, fetchDbs, updateDbState, UPDATE_DB_STATE } from './dbActions';

jest.mock('../services/dbMegaNapAPI.js', () => ({
  postDb() {
    return Promise.resolve([]);
  },
  getDbs() {
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
  
  it('creates an action to get the users databases', () => {
    const dbAction = fetchDbs();
    expect(dbAction).toEqual({
      type: 'FETCH_DBS',
      pendingType: 'FETCH_DBS_PENDING',
      fulfilledType: 'FETCH_DBS_FULFILLED',
      rejectedType: 'FETCH_DBS_REJECTED',
      payload: expect.any(Promise)
    });
  });

  it('creates an action to update db state', () => {
    const dbAction = updateDbState('testDbName', 'testDbId', 'testUsername');
    expect(dbAction).toEqual({
      type: UPDATE_DB_STATE,
      payload: {
        dbName: 'testDbName',
        dbId: 'testDbId',
        username: 'testUsername'
      }
    });
  });
}); 

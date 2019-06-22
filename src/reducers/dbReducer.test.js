import dbReducer from './dbReducer';
import { CREATE_DB_PENDING, FETCH_DBS_PENDING, FETCH_DBS } from '../actions/dbActions';

jest.mock('../services/dbMegaNapAPI.js', () => ({
  postDb() {
    return Promise.resolve([]);
  },
  getDbs() {
    return Promise.resolve([]);
  }
}));

describe('db reducer reducer tests', () => {
  const initialState = {
    loading: false,
    userDbs: []
  };

  it('can handle a post to db pending', () => {
    expect(dbReducer(initialState, {
      type: CREATE_DB_PENDING
    })).toEqual({
      loading: true,
      userDbs: []
    });
  });

  it('can handle a fetch dbs pending', () => {
    const newInitialState = {
      ...initialState,
      dbId: '',
      userDbs: []
    };
    expect(dbReducer(
      newInitialState,
      { type: FETCH_DBS_PENDING }
    )).toEqual({
      ...newInitialState,
      loading: true
    });
  });
  
  it('can handle a fetch dbs action', () => {
    const newInitialState = {
      ...initialState,
      dbId: '',
      userDbs: []
    };
    expect(dbReducer(
      newInitialState,
      {
        type: FETCH_DBS,
        payload: [
          { dbName: 'test', dbId: '123' }
        ]
      }
    )).toEqual({
      ...newInitialState,
      userDbs: [
        { dbName: 'test', dbId: '123' }
      ]
    });
  });
});

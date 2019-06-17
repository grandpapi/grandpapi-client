import dbReducer from './dbReducer';
import { CREATE_DB_PENDING, CREATE_DB } from '../actions/userDatabases/dbActions';

jest.mock('../services/grandpAPI.js', () => ({
  postDb() {
    return Promise.resolve([]);
  }
}));

describe('db reducer reducer tests', () => {
  const initialState = {
    loading: false,
    dbName: ''
  };

  it('can handle a post to db pending', () => {
    expect(dbReducer(initialState, {
      type: CREATE_DB_PENDING
    })).toEqual({
      loading: true,
      dbName: ''
    });
  });

  it('can handle a post to db', () => {
    expect(dbReducer({ ...initialState, loading: true }, {
      type: CREATE_DB,
      payload: {
        dbName: 'test name'
      }
    })).toEqual({
      loading: false,
      dbName: 'test name'
    });
  });
});

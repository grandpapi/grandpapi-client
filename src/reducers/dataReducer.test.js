import dataReducer from './dataReducer';
import { CREATE_DATA_PENDING, CREATE_DATA } from '../actions/dataActions';

jest.mock('../services/dataMegaNapAPI.js', () => ({
  postData() {
    return Promise.resolve([]);
  }
}));

describe('data actions', () => {
  const initialState = {
    loading: false,
    current: {}
  };

  it('can handle a post to db pending', () => {
    expect(dataReducer(initialState, {
      type: CREATE_DATA_PENDING
    })).toEqual({
      loading: true,
      current: {}
    });
  });

  it('can handle a create data action', () => {
    expect(dataReducer(initialState, {
      type: CREATE_DATA,
      payload: {
        somefield: 'test id',
      }
    })).toEqual({
      loading: false,
      current: {
        somefield: 'test id'
      }
    });
  });
}); 

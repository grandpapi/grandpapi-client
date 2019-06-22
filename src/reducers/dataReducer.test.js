import dataReducer from './dataReducer';
import { CREATE_DATA_PENDING } from '../actions/dataActions';

jest.mock('../services/dataMegaNapAPI.js', () => ({
  postData() {
    return Promise.resolve([]);
  }
}));


describe('data actions', () => {
  const initialState = {
    loading: false
  };

  it('can handle a post to db pending', () => {
    expect(dataReducer(initialState, {
      type: CREATE_DATA_PENDING
    })).toEqual({
      loading: true
    });
  });
}); 

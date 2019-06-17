import sessionReducer from './sessionReducer';
import { SET_SESSION } from '../actions/sessionActions';

jest.mock('../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([]);
  }
}));

describe('session reducer reducer tests', () => {
  const initialState = {
    username: '',
    token: '',
    image: ''
  };

  it('can handle a set session action', () => {
    expect(sessionReducer(initialState, {
      type: SET_SESSION,
      payload: {
        username: 'test username',
        token: 'test token',
        image: 'test image'
      }
    })).toEqual({
      username: 'test username',
      token: 'test token',
      image: 'test image'
    });
  });
});

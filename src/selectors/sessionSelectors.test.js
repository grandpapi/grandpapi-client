import { selectToken, selectNickname, selectUserId } from './sessionSelectors';

describe('session selectors tests', () => {
  const state = {
    session: {
      nickname: 'test username',
      token: 'test token',
      image: 'test image',
      userId: 'test userId'
    }
  };
  it('selects session token', () => {
    expect(selectToken(state)).toEqual('test token');
  });

  it('selects session nickname', () => {
    expect(selectNickname(state)).toEqual('test username');
  });

  it('selects session user id', () => {
    expect(selectUserId(state)).toEqual('test userId');
  });
});

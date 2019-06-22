import { selectToken, selectNickname, selectUserId, selectSession, selectCurrentDatabase, selectCurrentModelSchema, selectCurrentModel } from './sessionSelectors';

describe('session selectors tests', () => {
  const state = {
    session: {
      nickname: 'test nickname',
      token: 'test token',
      currentDatabase: {
        dbName: 'test dbName',
        dbId: 'test dbId',
        username: 'test username'
      },
      currentModel: {
        mdlName: 'test mdlName',
        mdlId: 'test mdlId',
        mdlSchema: '{test schema}'
      },
      currentData: {
        dataId: 'test dataId'
      },
      userId: 'test userId'
    }
  };

  it('selects session', () => {
    expect(selectSession(state)).toEqual({
      nickname: 'test nickname',
      token: 'test token',
      currentDatabase: {
        dbName: 'test dbName',
        dbId: 'test dbId',
        username: 'test username'
      },
      currentModel: {
        mdlName: 'test mdlName',
        mdlId: 'test mdlId',
        mdlSchema: '{test schema}'
      },
      currentData: {
        dataId: 'test dataId'
      },
      userId: 'test userId'
    });
  });

  it('selects session token', () => {
    expect(selectToken(state)).toEqual('test token');
  });

  it('selects session nickname', () => {
    expect(selectNickname(state)).toEqual('test nickname');
  });

  it('selects session user id', () => {
    expect(selectUserId(state)).toEqual('test userId');
  });
  
  it('selects current db', () => {
    expect(selectCurrentDatabase(state)).toEqual({
      dbName: 'test dbName',
      dbId: 'test dbId',
      username: 'test username'
    });
  });
  
  it('selects current model', () => {
    expect(selectCurrentModel(state)).toEqual({
      mdlName: 'test mdlName',
      mdlId: 'test mdlId',
      mdlSchema: '{test schema}'
    });
  });
  
  it('selects current model schema', () => {
    expect(selectCurrentModelSchema(state)).toEqual('{test schema}');
  });
});

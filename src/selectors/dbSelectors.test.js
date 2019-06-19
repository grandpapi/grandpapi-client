import { selectUserDbs } from './dbSelectors';

describe('db selectors tests', () => {
  const state = {
    databases: {
      loading: false,
      dbName: 'test name',
      dbId: 'test id',
      userDbs: [{ test: 'database' }]
    }
  };

  it('selects user dbs', () => {
    expect(selectUserDbs(state)).toEqual([{ test: 'database' }]);
  });
});

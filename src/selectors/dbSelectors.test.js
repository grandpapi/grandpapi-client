import { selectUserDbs } from './dbSelectors';

describe('db selectors tests', () => {
  const state = {
    databases: {
      loading: false,
      userDbs: [{ test: 'database' }]
    }
  };

  it('selects user dbs', () => {
    expect(selectUserDbs(state)).toEqual([{ test: 'database' }]);
  });
});

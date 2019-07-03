import { selectDbList } from './dbSelectors';

describe('db selectors tests', () => {
  const state = {
    databases: {
      loading: false,
      dbList: [{ test: 'database' }]
    }
  };

  it('selects user dbs', () => {
    expect(selectDbList(state)).toEqual([{ test: 'database' }]);
  });
});

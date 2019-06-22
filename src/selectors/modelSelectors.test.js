import { selectMdl, selectDbMdls, selectAllMdls } from './modelSelectors';

describe('session selectors tests', () => {
  const state = {
    models: {
      loading: false,
      dbMdls: ['test dbMdls'],
      allMdls: ['test allMdls']
    }
  };

  it('selects model', () => {
    expect(selectMdl(state)).toEqual({
      loading: false,
      dbMdls: ['test dbMdls'],
      allMdls: ['test allMdls']
    });
  });
  
  it('selects dbMdls', () => {
    expect(selectDbMdls(state)).toEqual(['test dbMdls']);
  });
  
  it('selects allMdls', () => {
    expect(selectAllMdls(state)).toEqual(['test allMdls']);
  });
});

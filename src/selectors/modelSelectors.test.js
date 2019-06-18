import { selectMdl, selectMdlId, selectMdlSchema, selectMdlName } from './modelSelectors';

describe('session selectors tests', () => {
  const state = {
    models: {
      loading: false,
      mdlName: 'test name',
      mdlSchema: { testField: 'test' },
      mdlId: '123'
    }
  };
  it('selects model', () => {
    expect(selectMdl(state)).toEqual({
      loading: false,
      mdlName: 'test name',
      mdlSchema: { testField: 'test' },
      mdlId: '123'
    });
  });

  it('selects model id', () => {
    expect(selectMdlId(state)).toEqual('123');
  });

  it('selects model name', () => {
    expect(selectMdlName(state)).toEqual('test name');
  });
  
  it('selects model name', () => {
    expect(selectMdlSchema(state)).toEqual({ testField: 'test' });
  });
});

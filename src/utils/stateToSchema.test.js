import stateToSchema from './stateToSchema';

describe('tests stateToSchema', () => {
  it('de-nests schema object', () => {
    const testObj = {
      0: {
        'name': 'String',
      },
      1: {
        'age': 'Number'
      }
    };
    const newObj = stateToSchema(testObj);
    expect(newObj).toEqual({
      name: 'String',
      age: 'Number'
    });
  });
});

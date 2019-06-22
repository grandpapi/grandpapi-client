import monitorInputs from './monitorInputs';

window.alert = jest.fn();

describe('Testing Monitor Inputs function', () => {
  it('will accept a good name', () => {
    const check = monitorInputs('some-thing');

    expect(check).toBeTruthy();  
  });

  it('will reject a name with spaces', () => {
    const check = monitorInputs('something awesome');

    expect(check).toBeFalsy();  
  });

  it('will reject a name with more than 14 characters', () => {

    const check = monitorInputs('abcdefghijklmnopqrs');

    expect(check).toBeFalsy();  
  });

  it('will accept a mdlSchema with good names', () => {
    const check = monitorInputs('clean', {
      'alpha': 'String',
      'beta': 'Boolean'
    });

    expect(check).toBeTruthy(); 
  });

  it('will reject a mdlSchema with spaces in the names', () => {
    const check = monitorInputs('clean', {
      'alp ha': 'String',
      'be ta': 'Boolean'
    });

    expect(check).toBeFalsy();
  });

  it('will reject a mdlSchema with more than 14 characters in the names', () => {
    const check = monitorInputs('clean', {
      'alphabetagammadelta': 'String',
      'beta': 'Boolean'
    });

    expect(check).toBeFalsy(); 
  });
});

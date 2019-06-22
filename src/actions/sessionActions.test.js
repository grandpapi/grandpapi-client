import { setSession, checkSession, navigateDashboard, NAVIGATE_DASHBOARD, navigateDatabase, NAVIGATE_DATABASE } from './sessionActions';

jest.mock('../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([]);
  },
  handleCheck() {
    return Promise.resolve([]);
  }
}));

describe('session actions', () => {
  it('creates an action to set the session', () => {
    const sessionAction = setSession();
    expect(sessionAction).toEqual({
      type: 'SET_SESSION',
      pendingType: 'SET_SESSION_PENDING',
      fulfilledType: 'SET_SESSION_FULFILLED',
      rejectedType: 'SET_SESSION_REJECTED',
      payload: expect.any(Promise)
    });
  });
  
  it('creates an action to check the session', () => {
    const sessionAction = checkSession();
    expect(sessionAction).toEqual({
      type: 'CHECK_SESSION',
      pendingType: 'CHECK_SESSION_PENDING',
      fulfilledType: 'CHECK_SESSION_FULFILLED',
      rejectedType: 'CHECK_SESSION_REJECTED',
      payload: expect.any(Promise)
    });
  });
  
  it('creates an action to nav to dashboard', () => {
    const sessionAction = navigateDashboard();
    expect(sessionAction).toEqual({
      type: NAVIGATE_DASHBOARD
    });
  });
  
  it('creates an action to nav to database', () => {
    const sessionAction = navigateDatabase();
    expect(sessionAction).toEqual({
      type: NAVIGATE_DATABASE
    });
  });
}); 

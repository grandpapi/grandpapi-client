import { createAction } from 'promise-middleware-redux';
import { handleAuth, handleCheck } from '../services/auth';

export const NAVIGATE_DASHBOARD = 'NAVIGATE_DASHBOARD';
export const NAVIGATE_DATABASE = 'NAVIGATE_DATABASE';

export const [
  setSession,
  SET_SESSION,
  SET_SESSION_PENDING
] = createAction('SET_SESSION', handleAuth);

export const [
  checkSession,
  CHECK_SESSION,
  CHECK_SESSION_PENDING
] = createAction('CHECK_SESSION', handleCheck);

export const navigateDashboard = () => ({
  type: NAVIGATE_DASHBOARD
});

export const navigateDatabase = () => ({
  type: NAVIGATE_DATABASE
});

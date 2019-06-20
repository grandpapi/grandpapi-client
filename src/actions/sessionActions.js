import { createAction } from 'promise-middleware-redux';
import { handleAuth, handleCheck } from '../services/auth';

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

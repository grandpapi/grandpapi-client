import { createAction } from 'promise-middleware-redux';
import { handleAuth } from '../services/auth';

export const [
  setSession,
  SET_SESSION,
  SET_SESSION_PENDING
] = createAction('SET_SESSION', handleAuth);

export const CHECK_SESSION = 'CHECK_SESSION';
export const checkSession = session => ({
  type: CHECK_SESSION,
  payload: session
});

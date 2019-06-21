import { createAction } from 'promise-middleware-redux';
import { postDb, getDbs } from '../services/dbMegaNapAPI';

export const UPDATE_DB_STATE = 'UPDATE_DB_STATE';

export const [
  createDb,
  CREATE_DB,
  CREATE_DB_PENDING
] = createAction('CREATE_DB', postDb);

export const [
  fetchDbs,
  FETCH_DBS,
  FETCH_DBS_PENDING
] = createAction('FETCH_DBS', getDbs);

export const updateDbState = (dbName, dbId) => ({
  type: UPDATE_DB_STATE,
  payload: { dbName, dbId }
});

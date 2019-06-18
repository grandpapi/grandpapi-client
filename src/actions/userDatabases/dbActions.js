import { createAction } from 'promise-middleware-redux';
import { postDb, getDbs } from '../../services/dbMegaNapAPI';

export const [
  createDb,
  CREATE_DB,
  CREATE_DB_PENDING,
  CREATE_DB_FULFILLED
] = createAction('CREATE_DB', postDb);

export const [
  fetchDbs,
  FETCH_DBS,
  FETCH_DBS_PENDING
] = createAction('FETCH_DBS', getDbs);

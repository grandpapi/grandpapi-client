import { createAction } from 'promise-middleware-redux';
import { postDb } from '../../services/dbMegaNapAPI';

export const [
  createDb,
  CREATE_DB,
  CREATE_DB_PENDING
] = createAction('CREATE_DB', postDb);

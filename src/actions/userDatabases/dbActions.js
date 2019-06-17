import { createAction } from 'promise-middleware-redux';
import { postDb } from '../../services/megaNapAPI';

export const [
  createDb,
  CREATE_DB,
  CREATE_DB_PENDING
] = createAction('CREATE_DB', postDb);
